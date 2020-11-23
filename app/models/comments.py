from .db import db

class Comments(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key = True)
  trackId = db.Column(db.Integer, nullable=False)
  artistId = db.Column(db.Integer, nullable=False)
  message = db.Column(db.String(300))