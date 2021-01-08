"""artists seed

Revision ID: a7c3f792b5dd
Revises: e31a3ab26e4b
Create Date: 2020-11-24 15:46:35.819285

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table

# revision identifiers, used by Alembic.
revision = 'a7c3f792b5dd'
down_revision = 'e31a3ab26e4b'
branch_labels = None
depends_on = None


def upgrade():
    artist = table('artists',
        sa.Column('id', sa.Integer()),
        sa.Column('name', sa.String()),
        sa.Column('username', sa.String()),
        sa.Column('email', sa.String()),
        sa.Column('bio', sa.Text()),
        sa.Column('country', sa.String()),
        sa.Column('city', sa.String()),
        sa.Column('profile_image_url', sa.String()),
        sa.Column('cover_image_url', sa.String()),
        sa.Column('tip_stash', sa.Integer()),
        sa.Column('dough', sa.Integer()),
        sa.Column('hashed_password', sa.String())
    )

    op.bulk_insert(artist,
    [
        {
            'name': 'Wolfgang Amadeus Mozart',
            'username': 'WolfieAnarchy',
            'email': 'mozart@genius.com',
            'bio': 'Yo, my name is Wolgang, I am 8 years old. My dad is a tyrant, he makes me practice the stupid piano for hours and makes me write boring stuff. Tbh I wanna do is play drums in a metal band. Yo send me some money so I can run away.',
            'country': 'Vienna',
            'city': 'Salzburg',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/images/mozartprofilepicture.jpg',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/coverimage/mozartCover.jpg',
            'tip_stash': 120,
            'dough': 20000,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'name': 'Drake',
            'username': 'thisisdrake',
            'email': 'drake@drake.com',
            'bio': 'This is Drake, just trying to make it big out here in Toronto. Only love my bed and my momma.',
            'country': 'USA',
            'city': 'Toronto',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/images/drakeprofilepicture.png',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/coverimage/drakecover.jpeg',
            'tip_stash': 75,
            'dough': 100,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
            {
            'name': 'Blink',
            'username': 'blink_guys',
            'email': 'blink@182.com',
            'bio': '''
            Californian life is chill and all, but it's about time to do something different.
            Country? R&B? Classic? Noooo....
            It's the PUNK generation!!
            Everybody, howl and let's rock the world out.
            ''',
            'country': 'USA',
            'city': 'California',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/images/blink_prof.jpg',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/coverimage/blink_cover.jpg',
            'tip_stash': 82,
            'dough': 100,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'name': 'Bon Jovi',
            'username': 'bonbon',
            'email': 'bon@jovi.com',
            'bio': '''Everybody wants something, just a little more.
                    We're making a living, and what we're living for.
                    A rich man or a poor man, a pawn or a king.
                    You can live on the street, you can rule the whole world.''',
            'country': 'USA',
            'city': 'New Jersey',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/images/bonjovi_prof.jpg',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/busker_logo.png',
            'tip_stash': 275,
            'dough': 78,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'name': 'Juan Luis Londoño Arias',
            'username': 'Maluma',
            'email': 'maluma@hawaii.com',
            'bio': '''Hello, my name is Juan Luis Londoño Arias. My stage name is Maluma.
                    I’m from Medellín, Colombia. I’m 16yrs old. I play soccer for Atletico National
                    and I spend the rest of my free time singing and creating music. My
                    dream vacation location is Hawaii. I look up to J Balvin and I hope that one
                    day I will be as famous as him. My dream is to have a big concert in Miami
                    one day. Hope you enjoy my music and I appreciate your support! Muchas gracias!''',
            'country': 'Columbia',
            'city': 'Madellin',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/images/maluma2.jpeg',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/coverimage/malumacover.png',
            'tip_stash': 82,
            'dough': 1000,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'name': 'Stefani Joanne Angelina Germanotta',
            'username': 'Lady Gaga',
            'email': 'ladygaga@queen.com',
            'bio': '''Hey, My name is Stefani. While I would love to be humble, I got to let
            you know that I’m going to be the next superstar! Don’t get fooled by my poker
            face, I’m actually a super fun and nice person. When I’m not singing I love to
            just dance and have fun. I’m in love with my beautiful fiancee Alejandro, so
            don’t even try!(unless you are Bradley Cooper lol) I know it's a little bit
            shallow but I had a crush on him since I was a little girl :)

            Appreciate your support and see you at the Grammys one day! xoxo''',
            'country': 'USA',
            'city': 'NY',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/images/ladygaga.jpeg',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/coverimage/ladygagacover.jpeg',
            'tip_stash': 82,
            'dough': 1000,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
        {
            'name': 'Demo User',
            'username': 'demouser',
            'email': 'demo@user.com',
            'bio': 'Hey there, If you want to upload music just press on the button above.',
            'country': 'Earth',
            'city': 'Paradise City',
            'profile_image_url': 'https://busker2.s3.amazonaws.com/defaultimage2.jpeg',
            'cover_image_url': 'https://busker2.s3.amazonaws.com/busker_logo.png',
            'tip_stash': 120,
            'dough': 20000,
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6'
        },
    ])


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('likes')
    op.drop_table('genres_connector')
    op.drop_table('comments')
    op.drop_table('tracks')
    op.drop_table('transactions')
    op.drop_table('followers')
    op.drop_table('albums')
    op.drop_table('genres')
    op.drop_table('artists')
    # ### end Alembic commands ###

