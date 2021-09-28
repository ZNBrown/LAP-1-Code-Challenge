const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const fetch = require('node-fetch');
const key = "AIzaSyAUWROeUhgRVIpqjFzNUUnpGczoVFZHMkA";
const engine_id = "bd4d82952addbbe19";

fakeResults = [{ "name" : " "
}]

app.get('/', (req, res) => res.json(message = "Not google"))


app.get('/search', (req, res) => {

})

app.get('/search/:term', (req, res) => {
    let searchTerm = req.params.term;
    url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${engine_id}&q=${searchTerm}`;
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.items[0].title));

})

app.listen(3000, () => console.log(`\nServer launched port 3000!\n`))
