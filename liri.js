require("dotenv").config();
const axios = require('axios')
var keys = require("./keys.js");
// const concert= require("./commands/concert-this.js")
// const doWhatItSays= require("./commands/do-what-it-says.js")
// const movieThis= require("./commands/movie-this.js")
// const spotify= require("./commands/spotify.js")


switch (process.argv[2]) {
    case 'concert-this':
        const band = process.argv[3];
        axios.get(`"https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp"`).then(
            function (response) {
                console.log(response);
            }
        )
        break;
    case 'spotify':
        console.log("spotify");
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