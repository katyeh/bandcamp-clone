from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Text


class Track(db.Model):
  __tablename__ = 'tracks'

  id = Column(Integer, primary_key = True)
  title(String)
  mp3_url(String)
  lyrics(Text)
  album_id(Integer, ForeignKey("album.id"))
  artist_id(Integer, ForeignKey("artist.id"))

  def to_dict(self):
    return {
      self.id: {
        "id": self.id,
        "title": self.title,
        "mp3Url": self.mp3_url
        "lyrics": self.lyrics
        "albumId": self.album_id
        "artistId": self.artist_id
      }
    }
