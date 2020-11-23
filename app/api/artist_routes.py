from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"artists": [user.to_dict() for user in users]}


@artist_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()



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