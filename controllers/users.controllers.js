let users = require('../models/users.model');
const { v4: uuidv4 } = require('uuid');

//get users
const getAllUser = (req, res) => {
    res.status(200).json({ users });
};

//create users
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        userName: req.body.userName,
        email: req.body.email
    }

    users.push(newUser);

    res.status(201).json(users);
};

//update user
const upadteUser = (req, res) => {
    const id = req.params.id;
    const { userName, email } = req.body;

    users.filter((user) => user.id == id).map((selectedUser) => {
        selectedUser.userName = userName;
        selectedUser.email = email;
    });

    res.status(200).json(users);
};

//update user
const deleteUser = (req, res) => {
    const id = req.params.id;

    users = users.filter((user) => user.id != id);

    res.status(200).json(users);
};

module.exports = { getAllUser, createUser, upadteUser, deleteUser };