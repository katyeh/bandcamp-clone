from flask import Blueprint, redirect, jsonify, request
from app.models import db, Track, Album, Artist

search_routes = Blueprint("search", __name__)

@search_routes.route("/search/tracks", methods=["GET", "POST"])
def search():
    keyword = request.args.get('searchterm')
    print(request.args)
    trackresults = Track.query.filter(Track.title.ilike(f"%{keyword}%")).all()
    albumresults = Album.query.filter(Album.title.ilike("%maluma%")).all()
    artistresults = Artist.query.filter(Artist.name.ilike(f"%{keyword}%")).all()
    return jsonify(trackresults = [{'id': trackresult.id, 'title': trackresult.title, 'artist_id': trackresult.artist_id} for trackresult in trackresults],
                   albumresults = [{'id': albumresult.id, 'title': albumresult.title, 'artist_id': albumresult.artist_id} for albumresult in albumresults],
                   artistresults = [{'id': artistresult.id, 'name': artistresult.name} for artistresult in artistresults])

@search_routes.route("/search/albums", methods=["GET", "POST"])
def searchAlbums():
    albumresults = Album.query.filter(Album.title.ilike("%maluma%")).all()
    return jsonify(albumresults = [{'id': albumresult.id, 'title': albumresult.title} for albumresult in albumresults])
