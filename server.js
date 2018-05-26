var express = require('express');

var app = express();

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello World');
});


app.get('/store', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('To jest sklep');
});





var server = app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});