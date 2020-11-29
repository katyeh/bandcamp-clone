from flask import Blueprint, jsonify, session, request
from app.models import Artist, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from datetime import datetime

import json
import binascii
import os
import boto3
from botocore.exceptions import ClientError
import uuid


auth_routes = Blueprint('auth', __name__)

s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id = os.environ.get('AWS_ACCESS_KEY'),
                      aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY')
)



def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = Artist.query.filter(Artist.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'Artist logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
  """
  Creates a new user and logs them in
  """
  
  form = SignUpForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
      key_list = request.files.keys()

      if request.files:
        if "profileImage" in key_list:
          profile_image_data = request.files["profileImage"]
          profile_image_key = f"images/{profile_image_data.filename}_{uuid.uuid4()}"
          client.put_object(Body=profile_image_data, Bucket="busker2", Key=profile_image_key, ContentType=profile_image_data.mimetype, ACL="public-read")

        if "coverImage" in key_list:
          cover_image_data = request.files["coverImage"]
          cover_image_key = f"coverimage/{cover_image_data.filename}_{uuid.uuid4()}"
          client.put_object(Body=cover_image_data, Bucket="busker2", Key=cover_image_key, ContentType=cover_image_data.mimetype, ACL="public-read")
    
      user = Artist(
          name=form.data['name'],
          username=form.data['username'],
          email=form.data['email'],
          bio=form.data['bio'],
          country=form.data['country'],
          city=form.data['city'],
          profile_image_url=f"https://busker2.s3.amazonaws.com/{profile_image_key}" \
                              if "profileImage" in key_list else "https://busker2.s3.amazonaws.com/defaultimage2.jpeg",
          cover_image_url=f"https://busker2.s3.amazonaws.com/{cover_image_key}" \
                            if "coverImage" in key_list else "https://busker2.s3.amazonaws.com/busker_logo.png",
          tip_stash=0,
          password=form.data['password'])
      db.session.add(user)
      db.session.commit()
      login_user(user)
      return user.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 404


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401