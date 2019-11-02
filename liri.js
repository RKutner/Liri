require("dotenv").config();
var keys = require("./keys.js");
const concert= require("./commands/concert-this.js")
const doWhatItSays= require("./commands/do-what-it-says.js")
const movieThis= require("./commands/movie-this.js")
const spotify= require("./commands/spotify.js")

// liri commands
// 'concert-this'
// 'spotify'
// 'movie-this'
// 'do-what-it-says'

switch(process.argv[2]){
    case 'concert-this':
        console.log("concert");
        break;
    case 'spotify':
        console.log("spotify");
        break;
    case 'movie-this':
        console.log('movie-this');
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