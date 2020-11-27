"""tracks seed

Revision ID: f02e04e28efb
Revises: a269fd65be21
Create Date: 2020-11-24 15:57:11.186095

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table
from datetime import datetime



# revision identifiers, used by Alembic.
revision = 'f02e04e28efb'
down_revision = 'a269fd65be21'
branch_labels = None
depends_on = None


def upgrade():
    tracks = table('tracks',
        sa.Column('id', sa.Integer()),
        sa.Column('title', sa.String()),
        sa.Column('mp3_url', sa.String()),
        sa.Column('lyrics', sa.Text()),
        sa.Column('album_id', sa.Integer()),
        sa.Column('artist_id', sa.Integer())
    )

    op.bulk_insert(tracks,
        [
            {
                'title': "6 Pieces",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Minuet in F major",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Allegro in B Flat",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Minuet in F Major",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Another Minuet in F Major",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Allegro in C major",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Another Allegro in C major",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': "Andante in F Major",
                'mp3_url': "",
                'lyrics':"",
                'album_id': 1,
                "artist_id": 1,
            },
            {
                'title': 'Das Londoner Notenbuch: I. in F Major,',
                'mp3_url': "",
                'lyrics':"",
                'album_id': 2,
                "artist_id": 1,
            },
            {
                'title': 'Das Londoner Notenbuch: II. in C Major',
                'mp3_url': "",
                'lyrics':"",
                'album_id': 2,
                "artist_id": 1,
            },
            {
                'title': 'Das Londoner Notenbuch: III. in G Major',
                'mp3_url': "",
                'lyrics':"",
                'album_id': 2,
                "artist_id": 1,
            },
            {
                'title': 'Das Londoner Notenbuch: IV. in D Major',
                'mp3_url': "",
                'lyrics':"",
                'album_id': 2,
                "artist_id": 1,
            },
            {
                'title': 'Das Londoner Notenbuch: V. in G Major',
                'mp3_url': "",
                'lyrics':"",
                'album_id': 2,
                "artist_id": 1,
            },
            {
                'title': 'Das Londoner Notenbuch: VI. in C Major',
                'mp3_url': "",
                'lyrics':"",
                'album_id': 2,
                "artist_id": 1,
            },
            {
                'title': 'Reebok Commercial',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/blink/Blink_ReebokCommercial.mp3',
                'lyrics': '''You are better than me,girls,money,and everything I try to compete with you,
                but you beat me at everything i do
                I see in you the things that I would like to be
                But im different from you,

                So you will have to be like me!

                I cannot be bought my personality is what I choose
                I was brought up without a silver cup I wont
                covet the things owned by you

                For all the world material things are now more and more
                jealousy for you and me
                I won't covet the things owned by your store
                ''',
                'album_id': 3,
                "artist_id": 3
            },
            {
                'title': 'Malboro Man',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/blink/Blink_MalboroMan.mp3',
                'lyrics': '''
                I whistle good
                I'm kinda straight
                And I can can can have fun

                No matter what I do
                I've always assumed that
                I can't go on sucking on my thumb

                Sifting through my toys
                Resting at my door
                After thinking that I couldn't read
                Sitting on the porch
                And waiting for porno
                While sucking on my damn fugi

                I don't know why
                I just want to die
                And here's 2 bucks for you
                This is the part where I should really part
                But I guess I've got nothing to do

                I don't know why
                I just want to die
                And here's 2 bucks for you
                This is the part where I should really part
                But I guess I've got nothing to do

                What'd our grandma think of me
                All that I've got to do
                Guess I should its a wonder

                My breath
                its how the streets cave in everyday

                Oh how the antelopes
                Tom's thumb just walked right through my nose

                What'd our grandma think of me
                All that I've got to do
                Guess I should its a wonder
                ''',
                'release_date': datetime(1993, 5, 1),
                'album_id': 3,
                "artist_id": 3
            },
            {
                'title': 'Freak Scene',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/blink/Blink_FreakScene.mp3',
                'lyrics': '''
                Seen enough to eye you
                but I've seen to much to try you
                it's always weirdness while you
                dig too much to fry you
                the weirdness flows between us
                freak scene just can't believe us
                why can't it be cool and free us

                Seen enough to eye you
                but I've seen to much to try you
                it's always weirdness while you
                dig too much to fry you
                the weirdness flows between us
                freak scene just can't believe us
                why can't it be cool and free us

                It's so fucked, I can't believe it
                if there's a way I wish I'd see it
                how could it work, just can't conceive us
                oh what a mess it's just to leave it

                Sometimes I don't thrill you
                sometimes I think I'll kill you
                just don't let me fuck up will you
                cause when I need a friend it's still you.
                ''',
                'release_date': datetime(1993, 5, 1),
                'album_id': 3,
                "artist_id": 3
            },
            {
                'title': 'Time',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/blink/Blink_Time.mp3',
                'lyrics': '''
                When the clock strikes two
                There's just so much to do
                And I can't explain what I need

                Jobs and social groups
                Hearing the latest news
                Keeping your reputation clean

                And I don't want to worry
                About being on time
                I see the way you hurry
                And time runs your life again

                The difference between east and west
                Money means so much less
                And objects aren't so important to buy

                I wish that a clock
                Could often just be stopped
                And then we look into the time

                And I don't want to worry
                About being on time
                I see the way you hurry
                And time runs your life again
                ''',
                'release_date': datetime(1994, 1, 1),
                'album_id': 4,
                "artist_id": 3
            },
            {
                'title': 'Sometimes',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/blink/Blink_Sometimes.mp3',
                'lyrics': '''
                Oh, how I wish that they would last
                Moments of peace that just slip through me so fast
                Just when I think that they are gonna stay
                Everything inside me just starts fading away

                Sometimes it seems like all I hope for
                Just gets thrown down on the floor
                And then it seems like you don't love me anymore
                Sometimes I wish that I could run away
                Sometimes I wish I just had something to say

                She looks at me and doesn't know the words to say
                But it's not you, I just don't feel quite right today
                All these things I say and do were never planned
                But how the fuck am I supposed to make you understand that

                Sometimes it seems like all I hope for
                Just gets thrown down on the floor
                And then it seems like you don't love me anymore
                Sometimes I wish that I could run away
                Sometimes I wish I just had something to say
                ''',
                'release_date': datetime(1994, 1, 1),
                'album_id': 4,
                "artist_id": 3
            },
            {
                'title': 'Runaway',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/bonjovi/BonJovi_Runaway.mp3',
                'lyrics': '''
                On the street where you live girls talk about their social lives
                They're made of lipstick, plastic and paint, a touch of sable in their eyes
                All your life, all your life all you've asked when's your daddy gonna talk to you
                But you were living in another world tryin' to get your message through.

                No one heard a single word you said.
                They should have seen it in your eyes
                What was going around your head.

                Ooh, she's a little runaway.
                Daddy's girl learned fast
                All those things he couldn't say.
                Ooh, she's a little runaway.
                A different line every night guaranteed to blow your mind
                I see you out on the streets, calling for a wild time
                So you sit home alone 'cause there's nothing left that you can do
                There's only pictures hung in the shadows left there to look at you

                You know she likes the lights at night on the neon Broadway signs
                She don't really mind, it's only love she hoped to find

                Ooh, she's a little runaway.
                Daddy's girl learned fast
                All those things he couldn't say.
                Ooh, she's a little runaway.

                No one heard a single word you said
                They should have seen it in your eyes
                What was going around your head.

                Ooh, she's a little runaway
                Daddy's girl learned fast
                All those things he couldn't say

                Ooh, she's a little runaway
                Daddy's girl learned fast
                Now she works the night away

                Ooh, she's a little runaway
                Daddy's girl learned fast
                All those things he couldn't say

                Ooh, she's a little runaway
                Daddy's girl learned fast
                Now she works the night away
                ''',
                'release_date': datetime(1991, 1, 1),
                'album_id': 5,
                "artist_id": 4
            },
            {
                'title': 'Best I Ever Head',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/drake/Best+I+Ever+Had.mp3',
                'lyrics': '<<URL HERE>>',
                "album_id": 6,
                "artist_id": 2
            },
            {
                'title': 'Farandulera',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/Farandulera+Maluma+Letra.mp3',
                'lyrics': '<<URL HERE>>',
                'album_id': 7,
                'artist_id': 5
            },

            {
                'title': 'vamos a pasarla bien',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/vamos+a+pasarla+bien+maluma+letra.mp3',
                'lyrics': '<<URL HERE>>',
                'album_id': 8,
                'artist_id': 5
            },
            {
                'title': 'Beautiful, Dirty, Rich',
                'mp3_url': 'https://busker2.s3.amazonaws.com/songs/ladygaga/Lady+Gaga+-+Beautiful%2C+Dirty%2C+Rich.mp3',
                'lyrics': '<<URL HERE>>',
                'album_id': 9,
                'artist_id': 6
            }
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

