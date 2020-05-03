const express = require('express');
const bodyExpress = require('body-parser');
const userRoutes = require('./routes/user-route.js')
//run on heroku
/// heroku local web
const app = express();
app.use(userRoutes);
app.listen(38711);

