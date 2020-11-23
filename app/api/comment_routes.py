from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Comment

comment_routes = Blueprint('comments', __name__, url_prefix="/comments")

@comment_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_comment(id):
  Comment.query.get(id)
  return jsonify(message = f"Deleted comment with id of ${id}."})