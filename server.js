var express = require('express');
var app = express();
var middleWare = require('./middleware.js');
var PORT = 3000;

app.use(middleWare.logger);
//app.use(middleWare.requireAuthentication);

app.get('/about', middleWare.requireAuthentication, function (req, res) {
    res.send('About Us,!');
});
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '!');
});