const app = require('./server.js').app;
const request = require('supertest');
const expect = require('expect');

describe('Web App', ()=>{
    describe('GET /', ()=>{
        it('should get home page',(done)=>{
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({error:'Page not found'})

            })
            .end(done);
        });
    });

    describe('GET /USERS',()=>{
        it('should get users ', (done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude(
                    // console.log(res.body);
                    {
                        name: 'hena',
                        age: 43
                    }
                );
            })
            .end(done);
        });
    });

});
