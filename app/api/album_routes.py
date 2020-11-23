from flask import Blueprint, redirect
from app.models import db, Album, Track

bp = Blueprint("album", __name__, url_prefix="/albums")

@bp.route("/<int:album_id>")
def albums():
    albums = Album.query.all()

@bp.route("/<int:album_id>/tracks")
def albumtracks():
    tracks = Track.query.filter(Track.album_id == album_id).all()
    return {
        "tracks": tracks
    }

@bp.route("/<id>", methods=["PUT"])
def update_album(id):
    album = Album.query.get(id)
    

@bp.route("/<id>", methods=["DELETE"])
def delete_album(id):
    album = Album.query.get(id)
    db.session.delete(album)
    db.session.commit()

    return "Album {id} was successfully deleted."
