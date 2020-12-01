from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Artist



class UploadAlbumForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    album_art_url = FileField('album_art_url')
    single = BooleanField('single')
    artist_id = IntegerField('artist_id', validators=[DataRequired()])
