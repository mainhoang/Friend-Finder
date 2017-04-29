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
        var best = 50;
        var index;

        for( var i = 0; i < friends.length; i++){
            var diff = Math.abs(currScore - friends[i].score);
            console.log(diff);

            if(diff < best){
                best = diff;
                index = i;
            }
            // Got stuck on how to find best match!

        }
        console.log(friends[index]);

        friends.push(currFriend);
        res.json(true);

    })

}

