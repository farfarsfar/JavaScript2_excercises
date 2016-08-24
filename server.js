var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/assets');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});