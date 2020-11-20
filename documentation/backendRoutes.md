# Back End Routes

* artists
  * GET /artists/:id => get a single artists info (returns name, username, location)
  * POST /artists => create a new artist (returns userId and token)
  * POST /artists/token=> verifies user login and returns token for the user
  * DELETE /artists/:id => delete an artist
* albums
  * GET /albums/:id => gets a single album (returns title, descrip, artist, and createdAt)
  * GET /albums/:id/tracks=> gets all the songs for a single album
  * POST /albums => create a new album
  * PUT /albums/:id => update album info (returns full album info)
  * DELETE /albums/:id => delete an album
* tracks
  * GET /tracks=> gets alltracks
  * GET /tracks/:id => gets a single track (returns title, descrip, artist, genre, and createdAt)
  * POST /tracks/ => create a new track
  * DELETE /tracks/:id => delete a track
* likes
  * GET /tracks/:id/likes => gets all likes for a single song
  * POST /tracks/:id/likes => adds a like to a single song
