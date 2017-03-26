const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// const server = require('../server');

// require the database models
const db = require('../models');
const query = require('../controllers/apiQuery');

describe('"user" model', () => {
  before((done)=>{
    db.sequelize.sync({ force: true }).then((result) => {
      done();
    })
  });
  it('emptied user table; should be an empty array', (done) => {
    query.findUser().then((results) => {
      expect(results).to.be.a('array');
      expect(results).to.have.lengthOf(0);
      done();
    })
  });
  it('search for non-existent user', (done) => {
    query.findUser(-99).then((results) => {
      // console.log(results);
      expect(results).to.be.a('null');
      done();
    })
  });
  
  // it('should be able to get a new user')
})


