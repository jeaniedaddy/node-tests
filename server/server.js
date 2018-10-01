const express = require('express');

var app = express();

app.get('/', (req, res)=> {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res)=>{
    var users = [{
        name: 'steve',
        age: 46
    }, {
        name: 'jeanie',
        age: 18
    }, {
        name: 'hena',
        age: 43
    }];
    res.send(users);
});

app.listen(3000);

module.exports.app = app; 