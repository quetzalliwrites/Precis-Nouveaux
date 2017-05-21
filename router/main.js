
var articles = require("../services/hello-world.js");


module.exports = function(app) {

     app.get('/phase3',function(req,res){
          var articleOne = articles.getArticleOne();
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