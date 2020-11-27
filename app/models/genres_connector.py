from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class GenresConnector(db.Model):
    __tablename__ = 'genres_connector'

    id = Column(db.Integer, primary_key=True)
    genre_id = Column(db.Integer, ForeignKey("genres.id"), nullable=False)
    track_id = Column(db.Integer, ForeignKey("tracks.id"))
    album_id = Column(db.Integer, ForeignKey("albums.id"))
    artist_id = Column(db.Integer, ForeignKey("artists.id"))

    def to_dict(self):
        return {
            self.id: {
                "id": self.id,
                "genre_id": self.genre_id,
                "album_id": self.album_id,
                "track_id": self.track_id,
                "artist_id": self.artist_id
            }
        }
