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

  it('should return an array of items', done => {
  api
    .get('/api/items')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(res.body).to.be.an('array');
      done();
    });
});

it('should return an array of item objects', done => {
  api.get('/api/items')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(res.body)
        .and.be.an('array')
        .and.have.property(0)
        .and.have.all.keys([
          '__v',
          '_id',
          'title',
          'make',
          'model',
          'createdAt',
          'updatedAt'
        ]);
      done();
    });
});

it('item objects should have properities: _id, title, make, model, createdAt, updatedAt', done => {
      api.get('/api/items')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstItem = res.body[0];

          expect(firstItem)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(firstItem)
            .to.have.property('title')
            .and.to.be.a('string');

          expect(firstItem)
            .to.have.property('make')
            .and.to.be.a('string');

          expect(firstItem)
            .to.have.property('model')
            .and.to.be.a('boolean');

          expect(firstItem)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(firstItem)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });
    });






















  })
})
