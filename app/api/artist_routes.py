from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from flask_cors import cross_origin
from sqlalchemy.orm import relationship, sessionmaker, joinedload
from app.models import db, Artist, Track, Album, Follower, Like
from sqlalchemy import func
import json
import random

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
@cross_origin()
def artist_all_albums(id):
    albums = Album.query.filter(Album.artist_id == id).all()
    if len(albums) > 0:
        # albums=[album.to_dict() for album in albums]
        # return jsonify(albums)
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

@artist_routes.route('/home')
def home_artists_not_logged_in():
  # liked_tracks = Like.query.filter(like.artist_id == id).joinedload(Like.track).limit(8).all()
  # for track in liked_tracks:
  #   print(track)
  # # random picks
  # random_picks = Track.query.limit(10).all()
  # random.shuffle(random_picks)

  # # trending
  # top_liked = db.session.query(Like.track_id, func.count(Like.track_id)).group_by(Like.track_id).order_by(Like.track_id).limit(10).all()

  # # new
  # new_tracks = Track.query.order_by(Track.id.desc()).limit(10).all()

  try:
    return jsonify(artists = {
      "a": "a"
    })
  except:
    return {'errors':'There are no tracks avaliable'}, 400

@artist_routes.route('/<int:id>/home')
def home_artists_logged_in(id):
    liked_track_ids = Like.query.filter(Like.artist_id == id).options(joinedload(Like.track)).all()
    artist_ids = [liked_track_id.track.artist_id for liked_track_id in liked_track_ids]
    artists = [Artist.query.get(artist_id) for artist_id in artist_ids]

    random_artists = Artist.query.limit(8).all()
    random.shuffle(random_artists)
    try:
      return jsonify(artists = {
        "based_on_likes": [artist.to_dict() for artist in set(artists)],
        "random_artists": [artist.to_dict() for artist in random_artists]
      })
    except:
      return {'errors':'There are no artists avaliable'}, 400