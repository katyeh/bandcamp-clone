from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Artist


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = Artist.query.filter(Artist.email == email).first()
    if user:
        raise ValidationError("Artist is already registered.")


class SignUpForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    bio = StringField('bio', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    profile_image_url = StringField('profile_image_url')
    cover_image_url = StringField('profile_image_url')
    password = StringField('password', validators=[DataRequired()])
