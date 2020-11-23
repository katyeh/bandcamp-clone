from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class Album(db.Model):
    __tablename__ = 'albums'

    id = Column(db.Integer, primary_key=True)
    title = Column(db.String(50), nullable=False)
    albumArtUrl = Column(db.String(
        1000), default='https://busker2.s3.amazonaws.com/defaultalbumcover.jpg')
    releaseDate = Column(db.Date)
    single = Column(db.Boolean)

def to_dict(self):
    return {
        self.id: {
            "id": self.id,
            "title": self.title,
            "albumArtUrl": self.albumArtUrl,
            "releaseDate": self.releaseDate,
            "single": self.single
        }
    }
