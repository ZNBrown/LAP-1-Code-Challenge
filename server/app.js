const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const fetch = require('node-fetch');
const key = "AIzaSyAUWROeUhgRVIpqjFzNUUnpGczoVFZHMkA";
const engine_id = "bd4d82952addbbe19";


app.get('/', (req, res) => res.json(message = "Not google"))


app.get('/search', (req, res) => {

})

app.get('/search/:term', (req, res) => {
    let searchTerm = req.params.term;
    let resultsToReturn = [];
    url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${engine_id}&q=${searchTerm}&num=1`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.items)

        for (const result in data.items) {
            console.log(result);
            //resultsToReturn.push([result.htmlTitle, result.htmlSnippet, result.link])
        }
        //console.log(resultsToReturn);
    });

})

app.listen(3001, () => console.log(`\nServer launched port 3000!\n`))
