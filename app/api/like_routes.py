from flask import Blueprint, redirect, jsonify, request
from app.models import db, Like

like_routes = Blueprint("like", __name__)

@like_routes.route("/tracks/<int:track_id>/likes")
def get_likes(track_id):
    likes = Like.query.filter(Like.track_id == track_id).all()
    return jsonify(likes = [like.to_dict() for like in likes])

@like_routes.route("/tracks/likes", methods=["POST"])
def add_like():
    try:
        track_id = request.json['track_id']
        artist_id = request.json['artist_id']

        new_like = Like(track_id=track_id, artist_id=artist_id)

        db.session.add(new_like)
        db.session.commit()

        like = Like.query.get(new_like.id)

        return like.to_dict()
    except:
        return "Error adding a like."

@like_routes.route("/likes/<id>", methods=["DELETE"])
def remove_like(id):
    like = Like.query.get(id)
    db.session.delete(like)
    db.session.commit()

    return "Like with {id} was successfully deleted"
