
var express    =    require('express');
var app        =    express();
var port       =    8080;

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(port,function(){
console.log("Express is running on port ", port);
});


