const express = require('express');
// const port    = process.env.PORT || 4000;
const app     = express();
const dest    = `${__dirname}/public`;

const mongoose   = require('mongoose');
const bluebird   = require('bluebird');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');
const expressJWT = require('expressJWT');
const config     = require('./config/config');
const routes     = require('./config/routes');


mongoose.connect(config.db);
mongoose.Promise = bluebird;


app.use(express.static(dest));






app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
