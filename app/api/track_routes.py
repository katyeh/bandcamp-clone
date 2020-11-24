
from flask import Blueprint
from flask_login import login_required
from app.models import db, Track


track_routes = Blueprint('tracks', __name__)

@track_routes.route('/')
def all_tracks():
  tracks = Track.query.all()
  print([track.to_dict() for track in tracks])
  return {"tracks": [track.to_dict() for track in tracks]}

@track_routes.route('/<int:id>')
def get_track(id):
  track = Track.query.get(id)
  return track.to_dict()

@track_routes.route('/<int:id>', methods=['DELETE'])
def get_track_to_delete(id):
  track = Track.query.get(id)
  db.session.delete(track)
  db.session.commit()
  return {'message': f"Successfully deleted track {id}"}, 200

@track_routes.route('/<int:id>/comments')
def get_comments(id):
  comments = Comment.query.filter(Comment.trackId == id).all()
  return jsonify(comments = comments)

@track_routes.route('/<int:id>/comments', methods=["POST"])
@login_required
def create_comment(id):
  comment_data = CommentForm()

  if comment_data.validate_on_submit():
    comment = Comment()
    comment_data.populate_obj(comment)

    try:
      db.session.add(comment)
      db.session.commit()
      return redirect('/')
    except: # Need to add error type
      return 'Error creating a comment.';
