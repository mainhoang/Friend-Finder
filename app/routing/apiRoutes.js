var friends = require('../data/friends');
var path = require('path');




module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        // if(friends.length > 0){
            friends.push(req.body);
            res.json(true);
        // }
    })

}


// $("#submit").on("click", function() {
//     event.preventDefault();
//     // console.log("yeah yeah");
//     // console.log($('#name').val());

//     // Here we grab the form elements
//     var newFriend = {
//         name: $('#name').val().trim(),
//         photo: $('#photo').val().trim(),
//         score: 0,
//         answers: [
//             parseInt($('#q1').val()),
//             parseInt($('#q2').val()),
//             parseInt($('#q3').val()),
//             parseInt($('#q4').val()),
//             parseInt($('#q5').val()),
//             parseInt($('#q6').val()),
//             parseInt($('#q7').val()),
//             parseInt($('#q8').val()),
//             parseInt($('#q9').val()),
//             parseInt($('#q10').val()),
//         ]
//         // findScore: function(){
//         //     var self = this;
//         //     var sum  = self.answers.reduce(function(a, b){
//         //         return a + b;
//         //     },0);
//         //     this.score = sum;
//         //     console.log(sum);
//         // }
//     };
//     // newFriend.findScore();
//     // allFriends.push(newFriend);


//     var currentURL = window.location.origin;


//     $.post("api/friends", newFriend, function(data) {
//         console.log(currentURL + "api/friends");
//         console.log("api/friends");

//         if (data) {
//             alert("yay! you're on your way to finding your match!")
//         }else{
//             alert("Sorry, you are on the wait list")
//         }

//         // clear form
//         $('#name').val("");
//         $('#photoURL').val("");
//         $('option').val("");

//     });

//     return false;

// });
