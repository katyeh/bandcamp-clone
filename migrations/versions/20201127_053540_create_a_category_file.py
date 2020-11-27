"""Create a category file.

Revision ID: a6f1465ca0ba
Revises: f02e04e28efb
Create Date: 2020-11-27 05:35:40.162946

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = 'a6f1465ca0ba'
down_revision = 'f02e04e28efb'
branch_labels = None
depends_on = None


def upgrade():
    genres = table('genres',
        sa.Column('id', sa.Integer()),
        sa.Column('name', sa.String()),
    )

    op.bulk_insert(genres,
        [
            {
                'name': "Electronic"
            },
            {
                'name': "Rock"
            },
            {
                'name': "Latin Music"
            },
            {
                'name': "Hip-hop"
            },
            {
                'name': "Punk"
            },
            {
                'name': "Jazz"
            },
            {
                'name': "Classical"
            },
            {
                'name': "Pop"
            },
            {
                'name': "Country"
            },
        ])


def downgrade():
    pass
