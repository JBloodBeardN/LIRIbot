# LIRIbot

## LIRI Bot Homework assignment

### Overview

This homework assignment required use of CLI for intup of command requiring the evaluation of the command input and parameter following the command. It used external dependencies on node packages and installation and management of dependendencies through npm. 
The file is also run through node and git bash terminal. Uses a spotify API node package and axios node package for handling http client based API calls. 

### How to use
1.use syntax "node liri command searchItem" to request that Liri Bot run an information search for the given search. Information is available for:

  * Movies
  * Songs
  * Bands
  * Musical Artists
  
  1. Use movie-this and a movie title to search OMDB API for movie information
  * example: https://github.com/JBloodBeardN/LIRIbot/blob/master/gifs/2bd785e87a90468a6b8eaa29dde52262.gif
  * example: https://github.com/JBloodBeardN/LIRIbot/blob/master/gifs/d7b32bdc7f2649edbad695345c2aa56d.gif

  2. Use spotify-this-song and a song title to search for information about that song. Spotify's API is.. funny.
  * example: https://github.com/JBloodBeardN/LIRIbot/blob/master/gifs/33a7356d2b1c881a0eaa356496ce2b69.gif
  * example: https://github.com/JBloodBeardN/LIRIbot/blob/master/gifs/2e6353608a18373c087390773d3a470d.gif

  3. Use concert-this to use Bands in Town API for concerts information on a band or artist
  * example: https://github.com/JBloodBeardN/LIRIbot/blob/master/gifs/f39001355c9231c035e8990281823f3e.gif

  NOTE: each command logs the command and searchItem to log.txt

  4. Use do=what-it-says and no searchItem to re-run each command written to date, which has been logged in log.txt. 
    NOTE: running do-what-it-says re-logs each command to log.txt
    * example: https://github.com/JBloodBeardN/LIRIbot/blob/master/gifs/814c555944d432fdfc6f750e11a60ab9.gif
