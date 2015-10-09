var express = require('express');
var app = express();

var cors = require('./utility/cors');
var logger = require('./utility/logger');

var networks = require('./routes/networks');

app.use(logger);
app.use(cors);
app.use('/', networks);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on '+port);
});
