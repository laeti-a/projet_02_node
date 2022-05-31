const routes = require('./routes')
const express = require('express')
let bodyParser = require('body-parser')

// Server config
const app = express()
const port = 3000

app.set("view engine", "pug")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use(routes)

app.listen(port)