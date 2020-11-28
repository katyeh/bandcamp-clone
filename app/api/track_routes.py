
from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Track, Comment, Album, Like
from sqlalchemy.orm import joinedload
from sqlalchemy import func
import json
import random

track_routes = Blueprint('tracks', __name__)

@track_routes.route('/')
def all_tracks():
  tracks = Track.query.all()
  try:
    return jsonify(tracks = [track.to_dict() for track in tracks])
  except:
    return {'errors':'There are no tracks avaliable'}, 400


@track_routes.route('/<int:id>')
def get_track(id):
  track = Track.query.get(id)
  if not track:
    return {'errors':'Could not find track'}, 400
  return track.to_dict()

@track_routes.route('/<int:id>', methods=['DELETE'])
def get_track_to_delete(id):
  track = Track.query.get(id)
  try:
    db.session.delete(track)
    db.session.commit()
    return {'message': "Successfully deleted track"}, 200
  except:
    return {'errors':'Error deleting track'}, 400

@track_routes.route('/<int:id>/comments')
def get_comments(id):
  comments = Comment.query.filter(Comment.track_id == id).all()
  return jsonify(comments = [comment.to_dict() for comment in comments])

@track_routes.route('/<int:id>/comments', methods=["POST"])
# @login_required
def comment_on_track(id):
  # comment_data = CommentForm()
  # if comment_data.validate_on_submit():
      # comment_data.populate_obj(comment)

  # To be replaced with above once frontend form is implemented.
  data = json.loads(request.data)
  comment = Comment()
  comment.track_id = id
  comment.artist_id = data["artist_id"]
  comment.message = data["message"]

  try:
    db.session.add(comment)
    db.session.commit()
    return jsonify(message = f"Commented on track with the id of {id}."), 201
  except:
    return jsonify(error = f"Error commenting on track with the id of {id}."), 404

@track_routes.route('/home')
def home():
  # random picks
  random_picks = Track.query.limit(10).all()
  random.shuffle(random_picks)

  # trending
  top_liked = db.session.query(Like.track_id, func.count(Like.track_id)).group_by(Like.track_id).order_by(Like.track_id).limit(10).all()

  # new
  new_tracks = Track.query.order_by(Track.id.desc()).limit(10).all()

  try:
    return jsonify(tracks = {
      "random_picks": [track.to_dict() for track in random_picks],
      "trending": [Track.query.get(track[0]).to_dict() for track in top_liked],
      "new": [track.to_dict() for track in new_tracks]
    })
  except:
    return {'errors':'There are no tracks avaliable'}, 400