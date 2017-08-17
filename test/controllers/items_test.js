require('../spec_helper');

const Item = require('../../models/item');

describe('Item tests', () => {

  beforeEach(done => {
    Item.collection.remove();
    done();
  });

  afterEach(done=> {
    Item.collection.remove();
    done();
  });

  describe('Get/api/items', () => {

    beforeEach(done => {
      Item.create({
        Title: 'Hairstraightner',
        make: 'Revlon',
        model: 'xyz',
      })
      .then(() => done ())
      .catch(done);
    });

    it('should return 200 response', done =>{
      api
        .get('/api/items')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should respond with a JSON object',
  done => {
    api
    .get('/api/items')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(res.header['content-type'])
        .to.be.eq('application/json; charset=utf-8');
      done();
    });
  });
  })
})
