from flask import Blueprint
from flask_login import login_required
from app.models import
fom ../models import db

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
