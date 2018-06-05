var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up Express App to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(__dirname + '/public'));


// ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);
var friends = require('./app/data/friends.js');



// LISTENER
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});