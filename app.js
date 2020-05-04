const express = require('express');
const bodyExpress = require('body-parser');
const userRoutes = require('./routes/user-route.js')
//run on heroku
/// heroku local web
const app = express();
app.use(userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

``
