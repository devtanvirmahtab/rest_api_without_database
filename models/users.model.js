const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        userName: "Tanvir",
        email: "tanvir@gmail.com",
    },
    {
        id: uuidv4(),
        userName: "Toha",
        email: "toha@gmail.com",
    },
    {
        id: uuidv4(),
        userName: "Mahtab",
        email: "mahtab@gmail.com",
    }
];

module.exports = users;