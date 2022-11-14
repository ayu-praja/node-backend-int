const express = require("express");
const bodyParser = require("body-parser")
let app = express();

let moviesJson = [{
    name:"Black Adma",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Black Panther",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Movie x",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Movie y",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Movie z",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"wakanda",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Black Adma",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Black Panther",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Movie x",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Movie y",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"Movie z",
    rating:"4.5",
    releaseDate:"29/07/2022"
},
{
    name:"wakanda",
    rating:"4.5",
    releaseDate:"29/07/2022"
}];

app.use(bodyParser.json())

app.get("/getAllMovies",(req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json({
        movies: moviesJson
    })
});

app.post("/postMovie",(req,res) => {
    let {name,rating,releaseDate} = req.body;
    try {
        if(name && rating && releaseDate) {
            let movies = [...moviesJson];
            movies.push(req.body);
            moviesJson = movies;
            res.json({
                success: true
            });
            return;
        }
        res.json({
            success: false
        })
    }
    catch(e) {
        res.json({
            success: false
        })
    }
})

app.listen(8080, () => {
    console.log('listening on port 3001');
  });