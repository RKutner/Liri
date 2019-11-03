require("dotenv").config();
const axios = require('axios')
const keys = require("./keys.js");
const moment = require('moment');
const Spotify = require('node-spotify-api');

// const concert= require("./commands/concert-this.js")
// const doWhatItSays= require("./commands/do-what-it-says.js")
// const movieThis= require("./commands/movie-this.js")
// const spotify= require("./commands/spotify.js")


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
    case 'spotify':
        // const spotify = new Spotify({
        //     id: keys.id,
        //     secret: keys.secret
        // });
        // spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
        //     if (err) {
        //         return console.log('Error occurred: ' + err);
        //     }

        //     console.log(data);
        // });
console.log(keys)
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
        console.log('dowhatitsays');
        break;
    default:
        console.log(`I'm sorry, I dont know what you just said. Try running the program with one of the following:`);
        console.log(`'concert-this' <Artist/Band>`);
        console.log(`'spotify' <Song>`);
        console.log(`'movie-this' <Movie>`);
        console.log(`'do-what-it-says'`);
        break;
}