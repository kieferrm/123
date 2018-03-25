const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, 'static')))
app.get('/hello', (req, res) => res.send(`Hello ${process.env['RWAF_CUSTOM']}!`))

app.listen(3000, () => console.log('Example app listening on port 3000!'))