const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, emails } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop any existing users
    await User.deleteMany({});

    // Drop any existing thoughts
    await Thought.deleteMany({});

    // Create an empty array to hold users for seeding
    const users = [];

    // Create 7 usernames
    for(let i = 0; i < 7; i++) {
        const username = usernames[i];
        const email = emails[i];


        users.push({
            username,
            email
        });
    }

    await User.collection.insertMany(users);

    console.table(users);
    process.exit(0);
});

