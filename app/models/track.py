from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Text
from sqlalchemy.orm import relationship


class Track(db.Model):
  __tablename__ = 'tracks'

  id = Column(Integer, primary_key = True)
  title = Column(String, nullable=False)
  mp3_url = Column(String, nullable=False)
  lyrics = Column(Text)
  album_id = Column(Integer, ForeignKey("albums.id"), nullable=False)
  artist_id = Column(Integer, ForeignKey("artists.id"), nullable=False)


  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "mp3_url": self.mp3_url,
      "lyrics": self.lyrics,
      "album_id": self.album_id,
      "artist_id": self.artist_id,
      'album_title': self.album.title,
      "album_art_url": self.album.album_art_url,
      "artist_name": self.artist.name
    }
