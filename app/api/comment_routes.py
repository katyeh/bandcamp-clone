from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__, url_prefix="/comments")

@comment_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def delete_comment(id):
  comment = Comment.query.get(id)
  try:
    db.session.delete(comment)
    db.session.commit()
    return jsonify(message = f"Deleted comment with the id of {id}."), 204
  except:
    return jsonify(error = f"Error deleting comment with the id of {id}."), 404