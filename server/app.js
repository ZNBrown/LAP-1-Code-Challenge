const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.json(message = "Not google"))
app.listen(3000, () => console.log(`\nServer launched port 3000!\n`))
