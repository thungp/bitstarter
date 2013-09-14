var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var fileBuff = fs.readFileSync('index.html'); 
  response.send(fileBuff.toString("utf-8");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
