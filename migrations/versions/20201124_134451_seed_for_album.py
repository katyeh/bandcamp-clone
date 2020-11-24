"""seed for album

Revision ID: e4fb7ec1467c
Revises: 34b20b25648f
Create Date: 2020-11-24 13:44:51.564313

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table



# revision identifiers, used by Alembic.
revision = 'e4fb7ec1467c'
down_revision = '34b20b25648f'
branch_labels = None
depends_on = None


def upgrade():
    albums = table('artists',
        sa.Column('id', sa.Integer()),
        sa.Column('title', sa.String()),
        sa.Column('album_art_url', sa.String()),
        sa.Column('release_date', sa.Date()),
        sa.Column('single', sa.Boolean())
    )


    op.bulk_insert(album,
        [
            {
                'title': 'My first piano grooves',
                'album_art_url':"",
                'release_date': datetime(1763, 1, 1),
                'single': False
            },
            {
                'title': 'My second piano grooves',
                'album_art_url':"",
                'release_date': datetime(1764, 1, 1),
                'single': False
            },
            {
                'title': 'Fly Swatter',
                'album_art_url': '<<URL HERE>>',
                'release_date': datetime(1993, 5, 1),
                'single': False
            },
            {
                'title': 'Buddha',
                'album_art_url': '<<URL HERE>>',
                'release_date': datetime(1994, 1, 1),
                'single': False
            },
            {
                'title': 'Runaway',
                'album_art_url': '<<URL HERE>>',
                'release_date': datetime(1981, 1, 1),
                'single': True
            },
            {
                'title': 'Thank Me Later',
                'album_art_url':  '<<URL HERE>>',
                'release_date': datetime(2010, 1, 1),
                'single': False
            },
            {
                'title': 'Maluma 1',
                'album_art_url': 'https://busker2.s3.amazonaws.com/albumeimage/maluma1.jpeg',
                'release_date': datetime(2008, 1, 3),
                'single': True
            },


            {
                'title': 'Maluma 2',
                'album_art_url': 'https://busker2.s3.amazonaws.com/albumeimage/maluma1.jpeg',
                'release_date': datetime(2008, 5, 8),
                'single': True
            },

            {
                'title': 'Lady Gaga 1',
                'album_art_url': '',
                'release_date': datetime(2010, 3, 9),
                'single': True
            },
        ])

def downgrade():
    pass
