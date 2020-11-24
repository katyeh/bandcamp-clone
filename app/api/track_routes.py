
from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, Track, Comment
import json

track_routes = Blueprint('tracks', __name__, url_prefix='/tracks')

@track_routes.route('/')
def all_tracks():
  tracks = Tracks.query.all()
  return {"tracks": [track.to_dict() for track in tracks]}

@track_routes.route('/<int:id>')
def get_track(id):
  track = Tracks.query.get(id)
  return track.to_dict()

@track_routes.route('/<int:id>', methods=['DELETE'])
def get_track_to_delete(id):
  track = Tracks.query.get(id)
  db.session.delete(track)
  db.session.commit()
  return {'message': f"Successfully deleted track {id}"}, 200

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
    return jsonify(message = f"Error commenting on track with the id of {id}."), 404

