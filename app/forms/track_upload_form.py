from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Artist


class UploadTrackForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    lyrics = StringField('lyrics')
    mp3_url = FileField('mp3_url', validators=[DataRequired()])
    album_id = IntegerField('artist_id', validators=[DataRequired()])
    artist_id = IntegerField('artist_id', validators=[DataRequired()])
