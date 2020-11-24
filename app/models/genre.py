from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class Genre(db.Model):
    __tablename__ = 'genres'

    id = Column(db.Integer, primary_key=True)
    name = Column(db.String(50), default=50, nullable=False)

    def to_dict(self):
        return {
            self.id: {
                "id": self.id,
                "name": self.name,
            }
        }
