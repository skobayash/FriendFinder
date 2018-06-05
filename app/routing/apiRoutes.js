var friendData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

    // Get friend data
    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    // Post to friends data
    app.post('/api/friends', function(req, res){
        console.log(req.body)
        // Push new user info to user array
        friendData.push(req.body);
		res.json(true);
    });


    

    
}