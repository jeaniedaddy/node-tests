var saveUser = (user)=> {
    console.log('saving the user', user)
};

var getUser = (name) => {
    console.log(`get user by name: ${name}`)
};

module.exports = {
    saveUser, getUser 
};