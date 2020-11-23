from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Artist, Track, Album

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/', methods=['GET'])
def all_artist():
    artists = Artist.query.all()
    return jsonify(artist)


@artist_routes.route('/<int:id>', methods=['GET'])
def artist():
    artist = Artist.query.get(id)
    return jsonify(artist)


@artist_routes.route('/<int:id>/tracks', methods=['GET'])
def artist_all_tracks():
    tracks = Track.query.filter_by(id).all()
    if len(tracks) > 0:
        return jsonify(tracks)
    else:
        return jsonify(error='This artist did not upload any songs yet.')


@artist_routes.route('/<int:id>/albums', methods=['GET'])
def artist_all_albums():
    albums = Album.query.filter_by(id).all()
    if len(albums) > 0:
        return jsonify(album)
    else:
        return jsonify(error='This artist did not upload any albums yet.')


@artist_routes.route('/<int:id>/tracks', methods=['POST'])
def new_track():
    if request.args is False:
        return jsonify(error='Bad Data')
    elif request.args.get():
        try:
            new_song = Song()
        except:
            pass
    else:
        return jsonify(error='Missing Arguments')




@artist_routes.route('/<int:id>/followers')
def get_followers(id):
  followers = Follower.query.filter(Follower.followedId == id).all()
  return jsonify(followers = followers)

@artist_routes.route('/<int:artistId>/followers', methods=["POST"])
@login_required
def follow(artistId):
  follower = Follower(followerId=request.args.get(id), followedId=artistId)

  try:
    db.session.add(follower)
    db.session.commit()
    return redirect('/')
  except: # Need to add error type
    return 'Error creating a follower.', 404;

@artist_routes.route('/<int:artistId>/followers', methods=["DELETE"])
@login_required
def unfollow(artistId):
  follower_data = Follower.query.filter(Follower.followerId == request.args.get(id) 
                                        and Follower.followedId == artistId).first()
  db.session.delete(follower_data)
  db.commit()
  return jsonify(message = f"Unfollowed artist with id of ${artistId}.")
