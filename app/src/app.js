
var express = require('express');
var heroe_routes = require('../routes/heroe.routes')

var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api',heroe_routes)

module.exports = app;