const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, runServer, closeServer} = require('../server');

chai.use(chaiHttp);

describe('Root', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should return status code 200 and HTML on GET', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        chai.expect(res).to.have.status(200);
        chai.expect(res).to.be.html;
      });
  });
});