const { User } = require('../models');

const userdata = [
    {
        "username": "User1",
        "email": "user1@email.com",
        "password": "pass11111"
    },
    {
        "username": "User2",
        "email": "user2@email.com",
        "password": "pass22222"
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;