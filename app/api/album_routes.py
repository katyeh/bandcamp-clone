from flask import Blueprint, redirect
from app.models import db, Album, Track

bp = Blueprint("album", __name__, url_prefix="/albums")

@bp.route("/<int:album_id>", methods=["GET"])
def get_album(album_id):
    album = Album.query.get(album_id)
    return jsonify(album)

@bp.route("/<int:album_id>/tracks")
def albumtracks():
    tracks = Track.query.filter(Track.album_id == album_id).all()
    return {
        "tracks": tracks
    }

@bp.route("/<id>", methods=["PUT"])
def update_album(id):
    album = Album.query.get(id)
    title = request.json['title']
    albumArtUrl = request.json['albumArtUrl']
    releaseDate = request.json['releaseDate']
    single = request.json['single']

    album.title = title
    album.albumArtUrl = albumArtUrl
    album.releaseDate = releaseDate
    album.single = single

    db.session.commit()

    # return album_schema.jsonify(album)

@bp.route("/<id>", methods=["DELETE"])
def delete_album(id):
    album = Album.query.get(id)
    db.session.delete(album)
    db.session.commit()

    return "Album {id} was successfully deleted."
