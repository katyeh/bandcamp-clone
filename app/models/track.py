from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Text


class Track(db.Model):
  __tablename__ = 'tracks'

  id = Column(Integer, primary_key = True)
  title = Column(String, nullable=False)
  mp3_url = Column(String, nullable=False)
  lyrics = Column(Text)
  album_id = Column(Integer, ForeignKey("albums.id"))
  artist_id = Column(Integer, ForeignKey("artists.id"))

  def to_dict(self):
    return {
      self.id: {
        "id": self.id,
        "title": self.title,
        "mp3Url": self.mp3_url,
        "lyrics": self.lyrics,
        "albumId": self.album_id,
        "artistId": self.artist_id
      }
    }
