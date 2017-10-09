module.exports = {
  port: process.env.PORT || 4000,
  db: process.env.MONGODB_BORRO_URI || 'mongodb://localhost/toolio',
  secret: process.env.SECRET || 'jh4893754ehrfhr9834rhfrwhf4389rhfr'
};





//
//   db: {
//     production: process.env.MONGODB_URI,
//     development: 'mongodb://localhost/toolio',
//     secret: process.env.SECRET || 'jh4893754ehrfhr9834rhfrwhf4389rhfr'
//     // test: 'mogodb://localhost/items-test'
//   }
// };
