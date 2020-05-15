const User = require('../models/users');

const UsersCtrl = {};

UsersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

UsersCtrl.createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
        genre: req.body.genre,
        dateCreation: req.body.dateCreation
    });
    await user.save();
    res.json({
        status: 'User saved'
    });
};

UsersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

UsersCtrl.updateUser =  async (req, res) => {
    const { id } = req.params;
    const updateUser = {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
        genre: req.body.genre,
        dateOfCreation: req.body.dateCreation
    };
    await User.findByIdAndUpdate(id, {$set:updateUser}, {new:true});
    res.json({
        status: 'User updated'
    });
};

UsersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User deleted'
    });
};

module.exports = UsersCtrl;