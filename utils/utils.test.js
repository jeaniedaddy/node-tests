const utils = require('./utils.js');
const expect = require('expect');

describe('Utils', ()=>{

    describe('#regular',() => {
        it('should be adding of two variables', () => {
            var res = utils.add(3,4);
            expect(res).toBeA('number').toBe(7); //.toBeA('number');
        });
    
        it('should be square of a variable', ()=> {
            var res = utils.square(7);
            expect(res).toBe(49).toBeA('number');
        });
    
        it('shouldb be a user with first and last name',()=>{
            var user = {location: 'philadelphia'};
            var userRes = utils.setName(user, 'steve no');
            // console.log(user);
            expect(userRes).toInclude({
                firstName: 'steve', lastName: 'no' 
            });
        });
    });

    describe('#Async', ()=>{
        it('shoulbe be add 2 values ',(done)=>{
            utils.addAsync(4,5,(res)=>{
                expect(res).toBe(9).toBeA('number');
                done();
            });
        });

        it('should be square of a value',(done)=>{
            utils.squareAsync(5,(res)=>{
                expect(res).toBe(25).toBeA('number');
                done();
            });
        });
    });

});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });


/*

//util function test
var res = utils.add(3,4);
console.log(res);

var res = utils.square(3);
console.log(res);

console.log('addAsync test');
var res = utils.addAsync(4,4, (res) => { 
    console.log(res);
});

console.log('squareAsync test');
var res = utils.squareAsync(4, (res) => { 
    console.log(res);
});

var user = {age : 46};
var userRes = utils.setName(user,'steve no');
console.log('userRes', userRes);
console.log('user', user);
*/