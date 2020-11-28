from flask import Blueprint, redirect, jsonify, request
from sqlalchemy.orm import joinedload

from app.models import db, Album, Track

album_routes = Blueprint("album", __name__)

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
        return {"tracks": [{track.id: track.to_dict()} for track in tracks]}
    else:
        return jsonify(error='This album does not exist.')
