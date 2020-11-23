from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Comment(db.Model):
  __tablename__ = 'comments'

  id = Column(Integer, primary_key=True)
  track_id = Column(Integer, ForeignKey("tracks.id"), nullable=False)
  artist_id = Column(Integer, ForeignKey("artists.id"), nullable=False)
  message = Column(String(300), nullable=False)

  def to_dict(self):
    return {
      self.id: {
        "id": self.id,
        "track_id": self.track_id,
        "artist_id": self.artist_id,
        "message": self.message
      }
    }