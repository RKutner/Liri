import axios from "axios";



axios({
    method: 'get',
    title= process.argv[3],
    url: `http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`
})