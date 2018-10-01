// add function
var add = (a, b) => a + b; 
// Async Add function
var addAsync = (a, b, callback) => {
    setTimeout(()=>{
        callback(a+b);
    }, 1000);

};
// square function
var square = (a) =>   a * a ;  

// Async square function
var squareAsync = (a, callback) => {
    setTimeout(()=>{ callback( a*a) ; },1000);

}; 
// setName function
var setName = (user, fullName) => {
    user.firstName = fullName.split(' ')[0];
    user.lastName = fullName.split(' ')[1];
    return user; 
}; 

module.exports = {
    add, addAsync, square, squareAsync, setName
};
