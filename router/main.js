
var articles = require("../services/hello-world.js");


module.exports = function(app) {

     app.get('/phase3',function(req,res){
         
         
          var fs = require("fs");
          var contents = fs.readFileSync("my_data.json");
          var jsonContent = JSON.parse(contents);
          var a = jsonContent[0].TEXT;
          var b = jsonContent[1].TEXT;
          var c = jsonContent[2].TEXT;
         
          var articleOne = a;
          var articleTwo = b;
          var articleThree = c;
          
          var viewModel = {
               articleOne: articleOne,
               articleTwo: articleTwo,
               articleThree: articleThree,

               messageThree: `${articleThree}`,
               messageTwo: `${articleTwo}`,
               messageOne: `${articleOne}`

          }
          res.render("index.html", viewModel);
     });

}
