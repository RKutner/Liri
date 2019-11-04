require("dotenv").config();
const axios = require('axios')
const keys = require("./keys.js");
const moment = require('moment');
const fs = require('fs');

switch (process.argv[2]) {
    case 'concert-this':
        const band = process.argv[3];
        const queryURL = `https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`;
        axios.get(queryURL).then(
            function (response) {
                console.log("Shows")
                for (let i = 0; i < 10; i++) {
                    console.log(response.data[i].venue.name);
                    console.log(response.data[i].venue.city);
                    console.log(moment(response.data[i].datetime).format("MM/DD/YYYY")) + '\n';
                }
            });
        break;
    case 'spotify-this-song':
        let song= process.argv[3];
        var Spotify = require('node-spotify-api');
 
        var spotify = new Spotify({
          id: "f989fcb4827740b08a01828a32562965",
          secret: "f7b95fa6f44e4153b7a48222053afa6c"
        });
         
        spotify.search({ type: 'track', query: song }, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }
         
        console.log("Song: ", data.tracks.items[0].album.artists[0].name); 
        console.log("Artist: ", data.tracks.items[0].album.artists[0].name); 
        console.log("Album: ", data.tracks.items[0].album.name); 
        console.log("Preview link: ", data.tracks.items[0].preview_url); 
        });
        break;
    case 'movie-this':
        const title = process.argv[3];
        axios.get(`http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`).then(
            function (response) {
                console.log('Title:', response.data.Title);
                console.log('Year:', response.data.Year);
                console.log('IMDB Rating:', response.data.imdbRating);
                console.log('Rotten Tomatoes:', response.data.Ratings[1].Value);
                console.log('Country:', response.data.Country);
                console.log('Language:', response.data.Language);
                console.log('Plot:', response.data.Plot);
                console.log('Cast:', response.data.Actors);


            });
        break;
    case 'do-what-it-says':
            fs.readFile("./random.txt", "utf8", function(error, data){
                if (error) {
                    return console.log(error);
                  }
                  var Spotify = require('node-spotify-api');
       
                  var spotify = new Spotify({
                    id: "f989fcb4827740b08a01828a32562965",
                    secret: "f7b95fa6f44e4153b7a48222053afa6c"
                  });
                  let song=data.split(",")[1]
                  spotify.search({ type: 'track', query: song }, function(err, data) {
                      if (err) {
                        return console.log('Error occurred: ' + err);
                      }
                     
                    console.log("Song: ", data.tracks.items[0].album.artists[0].name); 
                    console.log("Artist: ", data.tracks.items[0].album.artists[0].name); 
                    console.log("Album: ", data.tracks.items[0].album.name); 
                    console.log("Preview link: ", data.tracks.items[0].preview_url); 
                    });
            })
        break;
    default:
        console.log(`I'm sorry, I dont know what you just said. Try running the program with one of the following:`);
        console.log(`'concert-this' <Artist/Band>`);
        console.log(`'spotify-this-song' <Song>`);
        console.log(`'movie-this' <Movie>`);
        console.log(`'do-what-it-says'`);
        break;
}