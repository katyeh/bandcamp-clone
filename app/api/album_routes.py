from flask import Blueprint, redirect, jsonify, request
from sqlalchemy.orm import joinedload
from flask_cors import CORS,cross_origin


from app.models import db, Album, Track

from app.forms import UploadAlbumForm


import binascii
import os
import boto3
from botocore.exceptions import ClientError
import uuid

album_routes = Blueprint("album", __name__)


s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
                      aws_secret_access_key=os.environ.get(
                          'AWS_SECRET_ACCESS_KEY')
                      )


# @album_routes.route("/")
# def get_albums():
#     albums = Album.query.all()
#     if albums:
#         return {"albuns": [album.to_dict() for album in albums]}

@album_routes.route("/<int:id>")
def get_album(id):
    album = Album.query.get(id)
    if album:
        return album.to_dict()
    else:
        return jsonify(error='This album does not exist.')

@album_routes.route("/<int:album_id>/tracks")
def albumtracks(album_id):
    tracks = Track.query.filter(Track.album_id == album_id).all()
    if tracks:
        return jsonify(tracks = [track.to_dict() for track in tracks])
    else:
        return jsonify(error='There are no tracks in this album.')

@album_routes.route("/<int:id>", methods=["PUT"])
def update_album(id):
    try:
        album = Album.query.get(id)
        title = request.json['title']
        album_art_url = request.json['album_art_url']
        release_date = request.json['release_date']
        single = request.json['single']

        album.title = title
        album.album_art_url = album_art_url
        album.release_date = release_date
        album.single = single

        db.session.commit()
        return "Album was successfully updated."
    except:
        return "Error updating album."

@album_routes.route("/<int:id>", methods=["DELETE"])
def delete_album(id):
    try:
        album = Album.query.get(id)
        db.session.delete(album)
        db.session.commit()
        return "Album was successfully deleted."
    except:
        return jsonify(errors = f"Error deleting the album")

@album_routes.route("/player/<int:id>")
def get_album_player(id):
    tracks = Track.query.filter(Track.album_id == id).options(joinedload(Track.album), joinedload(Track.artist)).all()
    if tracks:
        return {"tracks": [track.to_dict() for track in tracks]}
    else:
        return jsonify(error='This album does not exist.')


@album_routes.route("", methods=['GET'])
@cross_origin(supports_credentials=True)
def get_albums():
    albums = Album.query.all()
    return jsonify([album.to_dict() for album in albums])


@album_routes.route('/', methods=['POST'])
def upload_album():
    try:
        form = UploadAlbumForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            key_list = request.files.keys()
            if request.files:
                if "album_art_url" in key_list:
                    cover_image_data = request.files["album_art_url"]
                    cover_image_key = f"albumeimage/{cover_image_data.filename}_{uuid.uuid4()}"
                    client.put_object(Body=cover_image_data, Bucket="busker2", Key=cover_image_key,
                                    ContentType=cover_image_data.mimetype, ACL="public-read")

                    album = Album(
                        title=form.data['title'],
                        album_art_url=f"https://busker2.s3.amazonaws.com/{cover_image_key}",
                        single=form.data['single'],
                        artist_id=form.data['artist_id'],
                    )
                    db.session.add(album)
                    db.session.commit()
                    return album.to_dict()
    except Exception as error:
        return jsonify(error=repr(error))
