from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Artist

def user_exists(form, field):
    print("Checking if user exists", field.data)
    email = field.data
    user = Artist.query.filter(Artist.email == email).first()
    if not user:
        raise ValidationError("User with the given email not found")


def password_matches(form, field):
    print("Checking if password matches")
    password = field.data
    email = form.data['email']
    user = Artist.query.filter(Artist.email == email).first()
    if user and (not user.check_password(password)):
        raise ValidationError("Password is incorrect")


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), 
            Email('Please enter a valid email'), 
            user_exists])
    password = StringField('password', validators=[
               DataRequired(), password_matches])
