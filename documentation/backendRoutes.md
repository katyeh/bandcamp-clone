# Backend Routes

* artists
  * GET /artists/:id => get a single artists info
  * GET /artists/:id/tracks=> gets all tracks by an artist
  * GET /artists/:id/albums => gets all albums by an artist
  * POST /artists => create a new artist (returns userId and token)
  * POST /artists/:id/tips => tip an artist
  * POST /artists/:id/songs => create a new tracks
  * POST /artists/:id/albums => create a new album
  * POST /artists/token=> verifies user login and returns token for the user
  * DELETE /artists/:id => delete an artist
* albums
  * GET /albums/:id => gets a single album (returns title, descrip, artist, and createdAt)
  * GET /albums/:id/tracks=> gets all the tracksfor a single album
  * PUT /albums/:id => update a single albums info (returns full album info)
  * DELETE /albums/:id => delete an album
* tracks
  * GET /tracks=> gets all tracks
  * GET /tracks/:id => gets a single tracks (returns title, descrip, artist, genre, and createdAt)
  * DELETE /tracks/:id => delete a tracks
* comments
  * GET /tracks/:id/comments => gets all comments for a single song
  * POST /tracks/:id/comments => create a new comment
  * DELETE /comments/:id => delete a comment
* likes
  * GET /tracks/:id/likes => gets all likes for a single track
  * POST /tracks/:id/likes => adds a like to a single track
  * DELETE likes/:id => remove like to a single track
* followers
  * GET /artists/:id/followers => gets all followers for an artist
  * POST /artists/:id/followers => follow an artist
  * DELETE /artists/:id/followers => unfollow an artist
