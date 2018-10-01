// const app = require('./app.js').app;
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('APP', ()=> {
    var db = {
        saveUser: expect.createSpy(),
        getUser: expect.createSpy()
    };
    app.__set__('db',db);

    it('should call the spy correctly', ()=> {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object',()=>{
        var user = { name: 'steve', age: 46};
        app.handleSignup(user);
        expect(db.saveUser).toHaveBeenCalledWith({name: 'steve', age: 46});
    });

    it('should get user from db',()=>{
        app.findUser('steve');
        expect(db.getUser).toHaveBeenCalledWith('steve');
    });
});
