from flask_wtf import FlaskForm
from wtforms import StringField, FileField
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
    # bio = StringField('bio', validators=[DataRequired()])
    # country = StringField('country', validators=[DataRequired()])
    # city = StringField('city', validators=[DataRequired()])
    # profile_image_url = FileField('profile_image_url', default="https://busker2.s3.amazonaws.com/defaultimage2.jpeg")
    # cover_image_url = FileField('cover_image_url', default="https://busker2.s3.amazonaws.com/busker_logo.png")
    # profile_image = FileField('profile_image_url')
    # cover_image = FileField('cover_image_url')
    password = StringField('password', validators=[DataRequired()])
