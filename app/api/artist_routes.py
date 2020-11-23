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
