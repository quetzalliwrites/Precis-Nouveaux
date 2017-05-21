var hello = require("../services/hello-world.js");

module.exports = function(app) {
     
     app.get('/',function(req,res){
          var message = "Hello!";
          res.send(message);
     });
     
     app.get('/phase2',function(req,res){
          var greeting = hello.getGreeting();
          var name = hello.getName();
          var message = `${greeting}, ${name}`;
          res.send(message);
     });
     
     app.get('/phase3',function(req,res){
          var greeting = hello.getGreeting();
          var name = hello.getName();
          var viewModel = {
               greeting: greeting,
               name: name,
               message: `${greeting}, ${name}`
          }
          res.render("index.html", viewModel);
     });
     
     
     app.get('/phase4',function(req,res){
          var greeting = hello.getGreeting(req.query.greeting);
          var name = hello.getName(req.query.name);
          var viewModel = {
               greeting: greeting,
               name: name,
               message: `${greeting}, ${name}`
          }
          res.render("index.html", viewModel);
     });
     
}


