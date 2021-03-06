const express = require('express');
const bodyExpress = require('body-parser');
const userRoutes = require('./routes/user-route.js');
const mongoose = require('mongoose');
const userController = require('./controllers/userController')
//run on heroku
/// heroku local web
const app = express();
/**************************************Parameters***************/
app.use(bodyExpress.json());
const uri = process.env.MONGO_CNN;
const port = 5000;

/**************************************MiddleWare***************/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next();
});
/**************************************Services***************/

app.post('/api/user', userController.createUser);
app.get('/api/user', userController.getUsers);
app.get('/api/user/:userId', userController.getUserById);

/**************************************Port***************/
const PORT = process.env.PORT || port;
app.listen(PORT);
/**************************************End***************/
/**************************************mongo config ***************/

mongoose.connect(uri, {useNewUrlParser: true}).then((res) => {
    console.log(res);

}).catch(err => {
    console.log(err);
});
/**************************************cnnStr***************/



