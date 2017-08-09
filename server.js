// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 3000;

var app = express();

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Home Route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/home.html"));
});

// Survey Route
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/survey.html"));
});

app.get('/data', function(req, res) {
    res.sendFile(path.join(__dirname + "/data/friends.js"));
});

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});