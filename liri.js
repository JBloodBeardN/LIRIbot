var dotenv = require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var artistORBandORSongORMovie = process.argv.slice(3).join('+');

// Make it so liri.js can take in one of the following commands:

commandObject = {
    "concert-this": function (parameter) {

        //    example input: `node liri.js concert-this <artist/band name here>`

        artistORBandORSongORMovie = parameter;


         queryUrl = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp"

           axios.get(queryUrl).then(function(response){
        var objectOfVenues = [];
        for (i=0;i<response.data.length;i++){
                var venue = response.data[i].venue.name;
                var city = response.data[i].venue.city;
                var region = response.data[i].venue.region;
                var country = response.data[i].venue.country;
                var datetime = response.data[i].datetime;
                var formatDate = moment(datetime, moment.ISO_8601).format("YYYY/MM/DD")
                //      * Name of the venue; 
                //      * Venue location; 
                //      * Date of the Event (use moment to format this as "MM/DD/YYYY")
                var venueObject = {
                    name : venue,
                    location : city+", "+region+" ,"+country,
                    date : formatDate
                }
            

            objectOfVenues.push(venueObject);
            
        }
        console.log(objectOfVenues);
        });
        
        //then log that you did something
        fs.appendFile("log.txt", ";concert-this,"+artistORBandORSongORMovie, function (err) {

            if (err) {
                return console.log(err);
            }
        });
    },


    "spotify-this-song": function (parameter) {
        // example input = `node liri.js spotify-this-song '<song name here>'
        // utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) 
        // default ace of base
        // if(artistORBandORSongORMovie === null){
        // artistORBandORSongORMovie = "Ace of Base"
        // }
        if(parameter=== undefined){
            artistORBandORSongORMovie = "The Sign"
        } else {
            artistORBandORSongORMovie = parameter;
        }


        spotify.search({ 
            type: 'track', 
            query: '"'+artistORBandORSongORMovie+'"', 
            limit: 10,

        }).then(function(response) {
            var artists = [];
            
            response.tracks.items[0].album.artists.forEach(function(element, index){
                artists.push(response.tracks.items[0].album.artists[index].name)
            })
            console.log("track name: "+response.tracks.items[0].name);
            console.log("artist : "+artists);
            console.log("album name: "+response.tracks.items[0].album.name);
            console.log("preview song here: "+response.tracks.items[0].preview_url);

        }).catch(function(err) {
            console.log(err);
        });
        

        // console.log(response);
        //     Artist(s);  The song's name; A preview link of the song from Spotify;  The album that the song is from

        // error = could not retrieve, here is ace of base


        //then log that you did something
        fs.appendFile("log.txt", ";spotify-this-song,"+artistORBandORSongORMovie, function(err){
            if(err){
            return console.log(err);
            }
        });
    },

    "movie-this": function (parameter) {
        artistORBandORSongORMovie = parameter;
        // example input: `node liri.js movie-this '<movie name here>'`

        //this is for adding default of mr. nobody
        var extraNullMessage = "";
        if (artistORBandORSongORMovie === ""){
            artistORBandORSongORMovie = "Mr. Nobody"
        extraNullMessage = ["If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>","","It's on Netflix!"];
        }

        var queryUrl = "http://www.omdbapi.com/?&apikey=40aab0d7&t="+artistORBandORSongORMovie;
        axios.get(queryUrl).then(function(response){
            //this is the mr nobody extra message print
            if(extraNullMessage !== ""){
                extraNullMessage.forEach(function(element){
                    console.log(element);
                });
            }
            console.log(response.data.Title +": Name");
            console.log(response.data.Year + ": Year");
            console.log(response.data.Ratings[0].Value + ": IMDB rating");
            console.log(response.data.Ratings[1].Value+ ":Rotten Tomatoes");
            console.log(response.data.Country+": country");
            console.log(response.data.Language+": Language");
            console.log(response.data.Plot+ ": Plot");
            console.log(response.data.Actors+": Actors");
        }).catch(function(err){
            if(err){
                artistORBandORSongORMovie = null;
                this["movie-this"];
            }
        });

        


        // error: display not found and here is Mr. Nobody


        //then log that you did something
        fs.appendFile("log.txt", ";movie-this,"+artistORBandORSongORMovie, function(err){

            if(err){
            return console.log(err);
            }
        });

    },

    "do-what-it-says": function () {
        // example input = `node liri.js do-what-it-says`

        // Using the `fs` Node package



        fs.readFile("log.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }
            var fileArray = data.split(";");
            fileArray.forEach(function(element){
                var command = element.split(",")[0];
                var parameter = element.split(",")[1];
                commandObject[command](parameter);
            });
        });

        // fileArray.forEach(function(element){
        //     element = element.trim();
        // });
        // var spotify = fileArray[0];
        // var movie = fileArray[1];
        // var artistORBand = fileArray[2]
        // this['concert-this'](artistORBand);
        // this['spotify-this-song'](spotify);
        // this['movie-this'](movie);
        // });
        // };   
        // };

    }
};
//end of commandObject


//this is what actually takes the command and calls a function
var command = process.argv[2];

commandObject[command](artistORBandORSongORMovie);