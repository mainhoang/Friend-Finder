var friends = require('../data/friends');
var path = require('path');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var currFriend = req.body;
        var currScore = currFriend.score;
        console.log(currScore);

        for( var i = 0; i < friends.length; i++){
            var diff = Math.abs(currScore - friends[i].score);
            console.log(diff);

            // Got stuck on how to find best match!

        }

        friends.push(currFriend);
        res.json(true);
        
    })

}

