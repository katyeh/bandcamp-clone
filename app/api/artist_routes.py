from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import db, Artist, Track, Album, Follower
import json

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/', methods=['GET'])
def all_artist():
    artists = Artist.query.all()
    return jsonify(artists=[artist.to_dict() for artist in artists])


@artist_routes.route('/<int:id>', methods=['GET'])
def artist(id):
    artist = Artist.query.get(id)
    return jsonify(artist=[artist.to_dict()])


@artist_routes.route('/<int:id>/tracks', methods=['GET'])
def artist_all_tracks(id):
    tracks = Track.query.filter(Track.artist_id == id).all()
    if len(tracks) > 0:
        return jsonify(tracks=[track.to_dict() for track in tracks])
    else:
        return jsonify(error='This artist did not upload any songs yet.')


@artist_routes.route('/<int:id>/albums', methods=['GET'])
def artist_all_albums(id):
    albums = Album.query.filter(Album.artist_id == id).all()
    if len(albums) > 0:
        return jsonify(albums=[album.to_dict() for album in albums])
    else:
        return jsonify(error='This artist did not upload any albums yet.')


@artist_routes.route('/<int:id>/albums', methods=['POST'])
@login_required
def new_album(id):
    data = json.loads(request.data)
    album = Album()
    album.title = data['title']
    album.album_art_url = data['album_art_url']
    album.release_date = data['release_date']
    album.single = data['single']
    album.artist_id = id
    try:
        db.session.add(album)
        db.session.commit()
        return jsonify(message='succsesfully uploaded the album')
    except:
        return jsonify(error='Missing Arguments')


@artist_routes.route('/<int:id>/tracks', methods=['POST'])
@login_required
def new_track(id):
    data = json.loads(request.data)
    track = Track()
    track.mp3_url = data['mp3_url']
    track.title = data['title']
    track.lyrics = data['lyrics']
    track.album_id = data['album_id']
    track.artist_id = id
    try:
        db.session.add(track)
        db.session.commit()
        return jsonify(message='succsesfully uploaded the track')
    except:
        return jsonify(error='Missing Arguments')


@artist_routes.route('/<int:id>/followers')
def get_followers(id):
  followers = Follower.query.filter(Follower.followed_id == id).all()
  return jsonify(followers = [follower.to_dict() for follower in followers])


@artist_routes.route('/<int:artistId>/followers', methods=["POST"])
# @login_required
def follow(artistId):
  followerId = json.loads(request.data)["id"]
  follower = Follower()
  follower.follower_id = followerId
  follower.followed_id = artistId

  try:
    db.session.add(follower)
    db.session.commit()
    return jsonify(message = f"Followed artist with the id of {artistId}."), 201
  except:
    return jsonify(error = f"Error following artist with the id of {artistId}."), 404


@artist_routes.route('/<int:artistId>/followers/<int:followerId>', methods=["DELETE"])
# @login_required
def unfollow(artistId, followerId):
  follower_data = Follower.query.filter(Follower.follower_id == followerId)\
                                .filter(Follower.followed_id == artistId).first()
  
  try:
    db.session.delete(follower_data)
    db.session.commit()
    return jsonify(message = f"Unfollowed artist with the id of {artistId}."), 204
  except:
    return jsonify(error = f"Error unfollowing artist with the id of {artistId}."), 404