# Back End Routes

* artists
  * GET /artists/:id => get a single artists info
  * GET /artists/:id/songs => gets all songs by an artist
  * GET /artists/:id/albums => gets all albums by an artist
  * POST /artists => create a new artist (returns userId and token)
  * POST /artists/:id/tips => tip an artist
  * POST /artists/:id/songs => create a new song
  * POST /artists/:id/albums => create a new album
  * POST /artists/token=> verifies user login and returns token for the user
  * DELETE /artists/:id => delete an artist
* albums
  * GET /albums/:id => gets a single album (returns title, descrip, artist, and createdAt)
  * GET /albums/:id/songs => gets all the songs for a single album
  * PUT /albums/:id => update a single albums info (returns full album info)
  * DELETE /albums/:id => delete an album
* songs
  * GET /songs => gets all songs
  * GET /songs/:id => gets a single song (returns title, descrip, artist, genre, and createdAt)
  * DELETE /songs/:id => delete a song
* comments
  * GET /songs/:id/comments => gets all comments for a single song
  * POST /songs/:id/comments => create a new comment
  * DELETE /comments/:id => delete a comment
* likes
  * GET /songs/:id/likes => gets all likes for a single song
  * POST /songs/:id/likes => adds a like to a single song
