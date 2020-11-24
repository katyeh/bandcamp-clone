from flask import Blueprint, redirect, jsonify
from app.models import db, Like

like_routes = Blueprint("like", __name__)

@like_routes.route("/tracks/<int:track_id>/likes")
def get_likes(track_id):
    likes = Like.query.filter(Like.track_id == track_id).all()
    return jsonify(likes = [like.to_dict() for like in likes])

@like_routes.route("/tracks/<int:track_id>/likes", methods=["POST"])
def new_like():
    likes = Like.query.all()
    new_like = {}
    like = Like(**new_like)
    db.session.add(like)
    db.session.commit()

    return jsonify(new_like)

@like_routes.route("/likes/<id>", methods=["DELETE"])
def remove_like(id):
    like = Like.query.get(id)
    db.session.delete(like)
    db.session.commit()

    return "Like with {id} was successfully deleted"
