
from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Track, Comment, Album, Like
from sqlalchemy.orm import joinedload
from sqlalchemy import func, select
import json
import random
from app.forms import UploadTrackForm


import binascii
import os
import boto3
from botocore.exceptions import ClientError
import uuid

track_routes = Blueprint('tracks', __name__)


s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
                      aws_secret_access_key=os.environ.get(
                          'AWS_SECRET_ACCESS_KEY')
                      )

@track_routes.route('/')
def all_tracks():
  # tracks = Track.query.all()
  tracks = Track.query.options(joinedload(Track.album), joinedload(Track.artist)).all()
  # tracks = None
  try:
    return {"tracks": [track.to_dict() for track in tracks]}
  except:
    return {'errors':'There are no tracks avaliable'}, 400


@track_routes.route('/<int:id>')
def get_track(id):
  track = Track.query.get(id)
  if not track:
    return {'errors':'Could not find track'}, 400
  return track.to_dict()

@track_routes.route('/<int:id>', methods=['DELETE'])
def get_track_to_delete(id):
  track = Track.query.get(id)
  try:
    db.session.delete(track)
    db.session.commit()
    return {'message': "Successfully deleted track"}, 200
  except:
    return {'errors':'Error deleting track'}, 400

@track_routes.route('/<int:id>/comments')
def get_comments(id):
  comments = Comment.query.filter(Comment.track_id == id).all()
  return jsonify(comments = [comment.to_dict() for comment in comments])

@track_routes.route('/<int:id>/comments', methods=["POST"])
# @login_required
def comment_on_track(id):
  # comment_data = CommentForm()
  # if comment_data.validate_on_submit():
      # comment_data.populate_obj(comment)

  # To be replaced with above once frontend form is implemented.
  data = json.loads(request.data)
  comment = Comment()
  comment.track_id = id
  comment.artist_id = data["artist_id"]
  comment.message = data["message"]

  try:
    db.session.add(comment)
    db.session.commit()
    return jsonify(message = f"Commented on track with the id of {id}."), 201
  except:
    return jsonify(error = f"Error commenting on track with the id of {id}."), 404

@track_routes.route('/home')
def home():
  # random picks
  random_picks = Track.query.order_by(func.random()).limit(10).all()

  # trending
  top_liked = db.session.query(Like.track_id, func.count(Like.track_id)).group_by(Like.track_id).order_by(Like.track_id).limit(10).all()

  # new
  new_tracks = Track.query.order_by(Track.id.desc()).limit(10).all()

  try:
    return jsonify(tracks = {
      "random_picks": [track.to_dict() for track in random_picks],
      "trending": [Track.query.get(track[0]).to_dict() for track in top_liked],
      "new": [track.to_dict() for track in new_tracks]
    })
  except:
    return {'errors':'There are no tracks avaliable'}, 400


@track_routes.route('/', methods=['POST'])
def upload_track():

  form = UploadTrackForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
      key_list = request.files.keys()

      if "newTrackUrl" in key_list:
        new_track_data = request.files["newTrackUrl"]
        new_track_key = f"songs/{new_track_data.filename}_{uuid.uuid4()}"
        client.put_object(Body=new_track_data, Bucket="busker2", Key=new_track_key,
                          ContentType=new_track_data.mimetype, ACL="public-read")

      track = Track(
          title=form.data['name'],
          mp3_url=f"https://busker2.s3.amazonaws.com/{new_track_key}",
          lyrics=form.data['lyrics'],
          album_id=form.data['albumId'],
          artist_id=form.data['artistId'],
          # album_title=form.data['albumTitle'],
          # album_art_url=f"https://busker2.s3.amazonaws.com/{cover_image_key}"
          # if "profileImage" in key_list else "https://busker2.s3.amazonaws.com/defaultimage2.jpeg",
          # artist_name=form.data['artistName']
          )
      db.session.add(track)
      db.session.commit()
      return track.to_dict()
  return {'errors': 'error while uploading'}, 404
