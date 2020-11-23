from werkzeug.security import generate_password_hash
from app.models import db, Artist

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = Artist(name='Demo',username='Demo', email='demo@aa.io', bio='',country='US',
        city='San Francisco',password='password')

    demo = Artist(name='Demo', username='Demo', email='demo@aa.io', bio='', country='US',
                  city='San Francisco', profile_image_url='', cover_image_url='', password='password')

    db.session.add(demo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
