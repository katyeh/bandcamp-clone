from flask import Blueprint, redirect, jsonify, request
from app.models import db, Track, Album, Artist
from sqlalchemy import or_

search_routes = Blueprint("search", __name__)

@search_routes.route("/search/tracks")
def search():
    trackresults = Track.query.filter(Track.title.ilike("%major%")).all()
    albumresults = Album.query.filter(Album.title.ilike("%major%")).all()
    artistresults = Artist.query.filter(Artist.name.ilike("%major%")).all()
    return jsonify(trackresults = [{'id': trackresult.id, 'title': trackresult.title} for trackresult in trackresults],
                   albumresults = [{'id': albumresult.id, 'title': albumresult.title} for albumresult in albumresults],
                   artistresults = [{'id': artistresult.id, 'name': artistresult.name} for artistresult in artistresults])
