var path = require('path');

// ROUTING
module.exports = function(app){

  // Get survey.html
  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
    console.log("Survey page requested.")
    });

  // Use home.html
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
    console.log("Home page requested.")
    });
}
