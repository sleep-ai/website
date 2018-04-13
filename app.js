var express = require('express');
var fs = require('fs');

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    return res.redirect('/public/index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Listening to port:  ' + port);
});

