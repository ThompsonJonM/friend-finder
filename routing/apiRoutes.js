// API routes go here

var friendsData = require('../data/friends.js');

var path = require('path');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function(req, res) {
        var newFriend = req.body;

        for(var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] == "3 (Neutral)")  {
                newFriend.scores[i] = 3;
            } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        var differencesArray = [];

        for(var i = 0; i < friendsData.length; i++) {

            var comparison = friendsData[i];
            var totalDifference = 0;

            for(var j = 0; j < comparison.scores.length; j++) {
                var differenceInScore = Math.abs(comparison.scores[j] - newFriend.scores[j]);
                totalDifference += differenceInScore;
            }

            differencesArray = totalDifference;
        }

        var bestMatchNumber = differencesArray[0];
        var bestMatchIndex = 0;

        for(var i = 0; i < differencesArray.length; i++) {
            if(differencesArray[i] < bestMatchNumber) {
                bestMatchNumber = differencesArray[i];
                bestMatchIndex = i;
            }
        }

        friendsData.push(newFriend);

        res.json(friendsData[bestMatchIndex]);
    })
}

