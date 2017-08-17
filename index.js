const express    = require('express');
const app        = express();
const dest       = `${__dirname}/public`;
const mongoose   = require('mongoose');
const bluebird   = require('bluebird');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');
const expressJWT = require('express-jwt');
const config     = require('./config/config');
const routes     = require('./config/routes');


mongoose.connect(config.db);
mongoose.Promise = bluebird;

if (app.get('env') !== 'production') app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));
app.use(morgan('dev'));
app.use(express.static(dest));

app.use('/api', expressJWT({secret: config.secret})
.unless({
  path: [
    {url: '/api/register', methods: ['POST']},
    {url: '/api/login', methods: ['POST']}
  ]
}));

app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if(err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.'});
}

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(config.port, () => console.log(`Express has started on port: ${config.port}`));

module.exports = app;
