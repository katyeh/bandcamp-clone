from .db import db
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.types import Integer, String, Date, Boolean

class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = Column(db.Integer, primary_key=True)
    amount = Column(db.Integer, nullable=False)
    sender_id = Column(db.Integer, ForeignKey("artists.id"), nullable=False)
    recipient_id = Column(db.Integer, ForeignKey("artists.id"), nullable=False)

def to_dict(self):
    return {
        self.id: {
            "id": self.id,
            "amount": self.amount,
            "senderId": self.senderId,
            "recipientId": self.recipientId,
        }
    }
