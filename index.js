var express = require('express');
var _ = require('lodash');

var app = express();

require('lodash-express')(app, 'html');

app.set('view engine', 'html');

app.use(express.static('public'));

app.all('/api/v1/*', function (req, res) {
    res.json({
        statusCode: 200,
        message: 'success',
        data: [
            {
                id: 1,
                name: 'Shareef',
                place: 'kerala'
            }, {
                id: 2,
                name: 'Manoj',
                place: 'karnataka'
            }, {
                id: 3,
                name: 'Vipin',
                place: 'Mumbai'
            }
        ]
    });
});

app.get('/*', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('app listening on port 3000!')
});