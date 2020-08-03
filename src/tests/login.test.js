//const Login = require('src/controllers/login.controller');
let chai = require('chai');
let chaiHttp = require("chai-http");
 let app = require('../app');
// const { response } = require('../app');

chai.should();

chai.use(chaiHttp);

describe("1 - Version", () => {

    describe("GET api/version", () => {
            it("1.1 - It should return api version", (done) => {
                chai.request(app)
                    .get('/')
                    .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('title');
                        response.body.should.have.property('version');
                        response.body.should.have.property('description');

                    done();
                    });

        });    
    })
});
describe("2 - Login", () => {
    describe("POST api/login", () => {
        it("2.1 - It should not login without valid email and password", (done) => {

            chai.request(app)
                .post('/login')
                .send()
                .end((err, response) => {
                    response.should.have.status(400);
                done();
                });

        });   
        it("2.2 - It should not login without valid email", (done) => {
            const login = {
                password: "Secret"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((err, response) => {
                    response.should.have.status(400);
                done();
                });

        });   
        it("2.3 - It should not login without valid password", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((err, response) => {
                    response.should.have.status(400);
                done();
                });

        });   
        it("2.4 - It should login with valid email and password", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('auth').eq(true);
                    response.body.should.have.property('success').eq(true);
                    response.body.should.have.property('message').eq('User Logged!');
                    response.body.should.have.property('token');

                done();
                });

        });    
    })
});
describe("3 - Document", () => {
    describe("POST api/document", () => {
        it("3.1 - It should NOT GENERATE document with invalid token / session", (done) => {
            chai.request(app)
                .post('/document')
                .send()
                .end((err, response) => {
                    response.should.have.status(401);
                    response.body.should.be.a('object');
                    response.body.should.have.property('sucess').eq(false);
                    response.body.should.have.property('errors').to.have.members(['No token provided.']);
                });
            done();
        });  
        it("3.2 - It should NOT GENERATE document without all valid information but logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {};
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(400);
                    });
                    done();
                });
        });  
        it("3.3 - It should GENERATE document without FULLNAME information and logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {
                "FullName": "",
                "BornDate": "07/02/1964",
                "CPF": "123456",
                "RG": "987654"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(400);
                    });
                    done();
                });
        });  
        it("3.4 - It should GENERATE document without BORNDATE and logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {
                "FullName": "Paulo de Tarso F Mussolini",
                "BornDate": "",
                "CPF": "123456",
                "RG": "987654"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(400);
                    });
                    done();
                });
        });  
        it("3.5 - It should GENERATE document with INVALID BORNDATE and logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {
                "FullName": "Paulo de Tarso F Mussolini",
                "BornDate": "256558x",
                "CPF": "123456",
                "RG": "987654"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(400);
                    });
                    done();
                });
        });  
        it("3.6 - It should GENERATE document without CPF information and logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {
                "FullName": "Paulo de Tarso F Mussolini",
                "BornDate": "07/02/1964",
                "CPF": "",
                "RG": "987654"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(400);
                    });
                    done();
                });
        });  
        it("3.7 - It should GENERATE document without RG information and logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {
                "FullName": "Paulo de Tarso F Mussolini",
                "BornDate": "07/02/1964",
                "CPF": "123456",
                "RG": ""
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(400);
                    });
                    done();
                });
        });  
        it("3.8 - It should GENERATE document with valid information and logged", (done) => {
            const login = {
                email: "paulo_mussolini@yahoo.com.br",
                password: "Secret"
            };
            const documentInformation = {
                "FullName": "Paulo de Tarso F Mussolini",
                "BornDate": "07/02/1964",
                "CPF": "123456",
                "RG": "987654"
            };
            chai.request(app)
                .post('/login')
                .send(login)
                .end((error, response) => {
                    response.should.have.status(200);
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + response.body.token)
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(201);
                    });
                    done();
                });
        });  
        it("3.9 - It should NOT GENERATE document (token expired)", (done) => {
            const documentInformation = {
                "FullName": "Paulo de Tarso F Mussolini",
                "BornDate": "07/02/1964",
                "CPF": "123456",
                "RG": "987654"
            };
                    chai.request(app)
                    .post('/document')
                    .set('authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxvX211c3NvbGluaUB5YWhvby5jb20uYnIiLCJpYXQiOjE1OTY0MTQ2MjQsImV4cCI6MTU5NjQxNTIyNH0.2RjRZgF73t4euTa7pMMw-X43VoANakQItClDOYrJxps")
                    .send(documentInformation)
                    .end((err, response) => {
                        response.should.have.status(401);
                        response.body.should.be.a('object');
                        response.body.should.have.property('sucess').eq(false);
                        response.body.should.have.property('errors').to.have.members(['Token has finished!']);
    
                    });
                    done();
        });  
    })
});