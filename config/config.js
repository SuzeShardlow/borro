module.exports = {
  port: process.env.PORT || 4000,
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost:27017/toolio',
    secret: process.env.SECRET || 'jh4893754ehrfhr9834rhfrwhf4389rhfr',
    test: 'mongodb://localhost/items-test'
  }
};
