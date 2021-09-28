const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.json(message = "Not google"))
app.listen(3000, () => console.log(`\nServer launched port 3000!\n`))


app.get('/search', (req, res) => {

})

app.get('/search/:term', (req, res) => {
    let searchTerm = req.params.term;

    
})
