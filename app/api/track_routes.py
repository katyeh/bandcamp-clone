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