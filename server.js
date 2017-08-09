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

app.use(express.static('app'));

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});