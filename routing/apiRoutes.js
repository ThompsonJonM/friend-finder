// API routes go here

var friendsData = require('../data/friends.js');

var path = require('path');

module.exports = function(app) {
    app.get('/friends', function(req, res) {
        res.json(friendsData);
    });
}

