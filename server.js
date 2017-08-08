var express = require('express');
var PORT = 3000;

var app = express();

app.get('/', function(req, res) {
    res.send('Friend Finder Op');
});

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});