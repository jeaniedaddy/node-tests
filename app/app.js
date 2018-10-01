const db = require('./db.js');

var handleSignup = (user) => {
    // check user
    // save user
    // var user = {
    //     name: 'hena',
    //     age : 43
    // }
    db.saveUser(user);
    // show result

};

var findUser= (name) => {
    db.getUser(name);
};

// app();
module.exports.handleSignup = handleSignup; 
module.exports.findUser = findUser; 