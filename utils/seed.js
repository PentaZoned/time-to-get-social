const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, emails, thoughtsTextArray } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop any existing users
    await User.deleteMany({});

    // Drop any existing thoughts
    await Thought.deleteMany({});

    // Create an empty array to hold users for seeding
    var users = [];
    // Create an empty array to hold thoughts for seeding
    var thoughts = [];

    // generate 7 usernames and emails from the imported arrays and push both
    // as an object into the users array
    for(let i = 0; i < 7; i++) {
        const username = usernames[i];
        const email = emails[i];
        let friends = usernames[i+1];

        if (i === 6) {
            friends = usernames[0];
        }
        
        users.push({
            username,
            email,
            friends
        });
    }

    // generate 7 thoughts and usernames from the imported arrays and push both
    // as an object into the thoughts array
    for(let i = 0; i < 7; i++) {
        const thoughtText = thoughtsTextArray[i];
        const username = usernames[i];

        thoughts.push({
            thoughtText,
            username
        })
    }

    // ensure the seeding is complete before doing anything else
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // show in the console what should appear in the database
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
});

