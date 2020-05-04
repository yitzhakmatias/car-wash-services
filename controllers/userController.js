const mongoose = require('mongoose');
const User = require('../models/User');


const createUser = async (req, res, next) => {
    const createUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    const response = await createUser.save();

    res.json(response);
};
const getUsers = async (req, res, next) => {
    const users = await User.find().exec();
    res.json(users);
};

const getUserById = async (req, res, next) => {
    let id = req.params.userId;
    const user = await User.findById(id).exec().then(doc => {
        if (doc !== null) {
            res.status(200).json(doc);
        } else {
            res.status(400).json({message: 'no entries found !!'});
        }
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    res.json(user);
};
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;


