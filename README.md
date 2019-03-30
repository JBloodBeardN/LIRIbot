# LIRIbot

## LIRI Bot Homework assignment

### Overview

This homework assignment required use of CLI for intup of command requiring the evaluation of the command input and parameter following the command. It used external dependencies on node packages and installation and management of dependendencies through npm. 
The file is also run through node and git bash terminal. Uses a spotify API node package and axios node package for handling http client based API calls. 

### How to use
1.use syntax "node liri command searchItem" to request that Liri Bot run an information search for the given search. Information is available for:

  *Movies
  *Songs
  *Bands
  *Musical Artists
  
  1. Use movie-this and a movie title to search OMDB API for movie information

  2. Use spotify-this-song and a song title to search for information about that song. Spotify's API is.. funny.

  3. Use concert-this to use Bands in Town API for concerts information on a band or artist

  NOTE: each command logs the command and searchItem to log.txt

  4. Use do=what-it-says and no searchItem to re-run each command written to date, which has been logged in log.txt. 
    NOTE: running do-what-it-says re-logs each command to log.txt
