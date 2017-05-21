
var articles = require("../services/hello-world.js");


module.exports = function(app) {

     app.get('/phase3',function(req,res){
         
         
          var fs = require("fs");
          console.log("\n *STARTING* \n");
// Get content from file
          var contents = fs.readFileSync("Row1.json");
// Define to JSON type
          var jsonContent = JSON.parse(contents);
// Get Value from JSON
          var a = jsonContent[0].TEXT;
         
          var articleOne = a;
          var articleTwo = articles.getArticleTwo();
          var articleThree = articles.getArticleThree();
          
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
