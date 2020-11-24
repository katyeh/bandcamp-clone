from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Artist(db.Model, UserMixin):
  __tablename__ = 'artists'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100), nullable=False)
  username = db.Column(db.String(50), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  bio = db.Column(db.Text, nullable= False)
  country = db.Column(db.String(50), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  profile_image_url = db.Column(db.String(255), default="https://busker2.s3.amazonaws.com/defaultimage2.jpeg")
  cover_image_url = db.Column(db.String(255), default="https://busker2.s3.amazonaws.com/busker_logo.png")
  tip_stash = db.Column(db.Integer)
  dough = db.Column(db.Integer,default=1000000)
  hashed_password = db.Column(db.String(255), nullable = False)


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      self.id: {
        "id": self.id,
        "name": self.name,
        "username": self.username,
        "email": self.email,
        "bio": self.bio,
        "country": self.country,
        "city": self.city,
        "tip_stash": self.tip_stash,
        "dough": self.dough,
      }
    }


  #  "profile_image_url": self.profile_image_url,
  #       "cover_image_url": self.cover_image_url,
