from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Artist, Track

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/', methods=['GET'])
def all_artist():
    artists = Artist.query.all()
    return jsonify(artist)


@artist_routes.route('/<int:id>', methods=['GET'])
def artist():
    artist = Artist.query.get(id)
    return jsonify(artist)


@artist_routes.route('/<int:id>/tracks', methods=['GET'])
def artist_all_tracks():
    tracks = Track.query.filter_by(id).all()
    if len(tracks) > 0:
        return jsonify(tracks)
    else:
        return jsonify(error='This artist did not upload any songs yet.')


@artist_routes.route('/<int:id>/albums', methods=['GET'])
def artist_all_tracks():
    albums = Album.query.filter_by(id).all()
    if len(albums) > 0:
        return jsonify(album)
    else:
        return jsonify(error='This artist did not upload any albums yet.')


@artist_routes.route('/<int:id>/tracks', methods=['POST'])
def new_track():
    if request.args is False:
        return jsonify(error='Bad Data')
    elif request.args.get():
        try:
            new_song = Song()
        except:
    else:
        return jsonify(error='Missing Arguments')


/////


@app.route('/ratings/<int:book_id>', methods=['POST'])
def post_rating(book_id):
    # print(request.args.get('value') is not '')
    # print(request.remote_addr)
    if request.args is False:
        return jsonify(error='Bad Data')
    elif request.args.get('value') is not '' and request.args.get('email') is not '':
        try:
            new_rating = Rating(value=int(request.args.get(
                'value')), book_id=book_id, email=request.args.get('email'))
            db.session.add(new_rating)
            db.session.commit()
            return jsonify(new_rating={'email': new_rating.email, 'value': new_rating.value, 'book_id': book_id})
        except IntegrityError as e:
            print(e)
            return jsonify(error='Each user can only submit one rating per book.')
    else:
        return jsonify(error='Missing Arguments')

