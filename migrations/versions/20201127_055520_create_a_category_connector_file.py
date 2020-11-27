"""Create a category connector file.

Revision ID: 2e5e9a84049c
Revises: a6f1465ca0ba
Create Date: 2020-11-27 05:55:20.528126

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = '2e5e9a84049c'
down_revision = 'a6f1465ca0ba'
branch_labels = None
depends_on = None


def upgrade():
    genres_connector = table('genres_connector',
        sa.Column('id', sa.Integer()),
        sa.Column('genre_id', sa.String()),
        sa.Column('album_id', sa.Integer()),
        sa.Column('track_id', sa.String()),
        sa.Column('artist_id', sa.Integer()),
    )

    op.bulk_insert(genres_connector,
        [
            {
                'genre_id': 7,
                'album_id': 1,
            },
            {
                'genre_id': 7,
                'artist_id': 1
            },
            {
                'genre_id': 7,
                'track_id': 1,
            },
            {
                'genre_id': 7,
                'track_id': 2,
            },
            {
                'genre_id': 7,
                'track_id': 3,
            },
            {
                'genre_id': 7,
                'track_id': 4,
            },
            {
                'genre_id': 7,
                'track_id': 5,
            },
            {
                'genre_id': 7,
                'track_id': 6,
            },
            {
                'genre_id': 7,
                'track_id': 7,
            },
            {
                'genre_id': 7,
                'track_id': 8,
            },
            {
                'genre_id': 7,
                'album_id': 2,
            },
            {
                'genre_id': 7,
                'track_id': 9,
            },
            {
                'genre_id': 7,
                'track_id': 10,
            },
            {
                'genre_id': 7,
                'track_id': 11,
            },
            {
                'genre_id': 7,
                'track_id': 12,
            },
            {
                'genre_id': 7,
                'track_id': 13,
            },
            {
                'genre_id': 7,
                'track_id': 14,
            },
            {
                'genre_id': 5,
                'album_id': 3,
            },
            {
                'genre_id': 5,
                'artist_id': 3
            },
            {
                'genre_id': 5,
                'track_id': 15,
            },
            {
                'genre_id': 5,
                'track_id': 16,
            },
            {
                'genre_id': 5,
                'track_id': 17,
            },
            {
                'genre_id': 5,
                'album_id': 4,
            },
            {
                'genre_id': 5,
                'track_id': 18,
            },
            {
                'genre_id': 5,
                'track_id': 19,
            },
            {
                'genre_id': 2,
                'album_id': 5,
            },
            {
                'genre_id': 2,
                'artist': 4,
            },
            {
                'genre_id': 2,
                'track_id': 20,
            },
            {
                'genre_id': 4,
                'album_id': 6,
            },
            {
                'genre_id': 4,
                'artist_id': 2,
            },
            {
                'genre_id': 4,
                'track_id': 21,
            },
            {
                'genre_id': 3,
                'album_id': 7,
            },
            {
                'genre_id': 3,
                'artist_id': 5,
            },
            {
                'genre_id': 3,
                'track_id': 22,
            },
            {
                'genre_id': 3,
                'album_id': 8,
            },
            {
                'genre_id': 3,
                'track_id': 23,
            },
            {
                'genre_id': 8,
                'album_id': 9,
            },
            {
                'genre_id': 8,
                'album_id': 6,
            },
            {
                'genre_id': 8,
                'track_id': 24,
            },
        ])


def downgrade():
    pass
