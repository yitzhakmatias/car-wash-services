const express = require('express');
const bodyExpress = require('body-parser');
const userRoutes = require('./routes/user-route.js')

const app = express();
app.use(userRoutes);
app.listen(5000);

