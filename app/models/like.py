from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Text

class Like(db.Model):
    __tablename__ = 'likes'

    id = Column(db.Integer, primary_key=True)
    track_id = Column(db.Integer, ForeignKey("tracks.id"), nullable=False)
    artist_id = Column(db.Integer, ForeignKey("artists.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "track_id": self.track_id,
            "artist_id": self.artist_id
        }
