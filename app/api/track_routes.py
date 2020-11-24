
from flask import Blueprint
from flask_login import login_required
from app.models import db, Track


track_routes = Blueprint('tracks', __name__)

@track_routes.route('/')
def all_tracks():
  tracks = Track.query.all()
  # tracks = None
  try:
    print([track.to_dict() for track in tracks])
    return {"tracks": [track.to_dict() for track in tracks]}
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
      return 'Error creating a comment.'
