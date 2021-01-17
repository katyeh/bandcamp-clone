from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from app.models import Artist

def user_exists_with_username(form, field):
    print("Checking if user exits", field.data)
    username = field.data
    user = Artist.query.filter(Artist.username == username).first()
    if user:
        raise ValidationError("There is already an user with given username")


def user_exists_with_email(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = Artist.query.filter(Artist.email == email).first()
    if user:
        raise ValidationError("There is already an user with given email")

class SignUpForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    username = StringField('username', validators=[
               DataRequired(),
               user_exists_with_username])
    email = StringField('email', validators=[DataRequired(),
            Email('Please enter a valid email'),
            user_exists_with_email])
    password = StringField('password', validators=[DataRequired()])
    repeat_password = StringField('repeat_password', validators=[
                      DataRequired(),
                      EqualTo('password', message='Passwords must match')
    ])
