
require('../spec_helper');

const Item = require('../../models/item');
const User = require('../../models/user');

let token;

describe('tests', () => {

  beforeEach(done => {
    Item.collection.remove();
    done();
  });

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/items', () => {

    beforeEach(done => {
      const user = new User({
        firstName: 'wendyB',
        lastName: 'wendyB',
        email: 'wendy@wendyB.com',
        photo: 'http://www.fillmurray.com/300/300',
        dob: '2017-01-09T00:00:00.000Z',
        description: 'wendy',
        password: 'password',
        passwordConfirmation: 'password',
        items: [],
        sent_requests: [],
        recieved_requests: []
      });

      user.save((err, user) => {
        api.post('/api/login')
          .set('Accept', 'application/json')
          .send({
            email: 'wendy@wendyB.com',
            password: 'password'
          }).end((err, res) => {
            token = res.body.token;
            done();
          });
      });
    });

    beforeEach(done => {
      const item = new Item({
        title: 'hello',
        type: 'my',
        photo: 'name'
      });
      item.save((err, item) => {
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get('/api/items')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api.get('/api/items')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of items', done => {
      api.get('/api/items')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of item objects', done => {
      api.get('/api/items')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).and.be.an('array');
          done();
        });
    });

    it('items objects should have properities: _id', done => {
      api.get('/api/items')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          const firstItem = res.body[0];
          expect(firstItem)
            .to.have.property('_id')
            .and.to.be.a('string');

          done();
        });
    });
  });

  describe('POST /api/items without token', () => {
    it('should return a 401 response', done => {
      api.post('/api/items')
        .set('Accept', 'application/json')
        .send({
          item: {
            title: 'test',
            type: 'test',
            photo: 'test'
          }
        }).expect(401, done);
    });
  });

  describe('POST /api/items with token', () => {

    beforeEach(done => {
      const user = new User({
        firstName: 'wendyB',
        lastName: 'wendyB',
        email: 'wendy@wendyB.com',
        photo: 'http://www.fillmurray.com/300/300',
        dob: '2017-01-09T00:00:00.000Z',
        description: 'wendy',
        password: 'password',
        passwordConfirmation: 'password',
        items: [],
        sent_requests: [],
        recieved_requests: []
      });

      user.save((err, user) => {
        api.post('/api/login')
          .set('Accept', 'application/json')
          .send({
            email: 'test@test.com',
            password: 'password'
          }).end((err, res) => {
            token = res.body.token;
            done();
          });
      });
    });
  });

  describe('GET /api/items/:id', () => {
    let item;
    beforeEach(done => {
      item = new Item({
        title: 'hello',
        type: 'my',
        photo: 'name'
      });

      item.save((err, item) => {
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get(`/api/items/${item.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
        done();
    });
  });

  describe('DELETE /api/items/:id without token', () => {

    let item;

    beforeEach(done => {
      item = new Item({
        title: 'test',
        type: 'test',
        photo: 'test'
      });

      item.save((err, item) => {
        done();
      });
    });

    it('should return a 401 response', done => {
      api.delete(`/api/items/${item.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(401, done);
        done();
    });

  });

  describe('DELETE /api/items/:id with token', () => {

      beforeEach(done => {
        const user = new User({
          username: 'test',
          email: 'test@test.com',
          password: 'password',
          passwordConfirmation: 'password'
        });

        user.save((err, user) => {
          api.post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'test@test.com',
              password: 'password'
            }).end((err, res) => {
              token = res.body.token;
              done();
            });
        });
      });

    it('should return a 204 response', done => {
      const item = new Item({
        title: 'hello',
        type: 'my',
        photo: 'name'
      });

      item.save((err, item) => {
        api.delete(`/api/items/${item.id}`)
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect(204, done);
          done();
      });
     });
    });
});
