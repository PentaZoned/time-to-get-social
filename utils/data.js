const names = [
    'Alex',
    'Edward',
    'Emily',
    'Jones',
    'Smith',
    'Mark',
    'Jarold',
];

// Gets a random element in an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// generates a full name by calling on getRandomArrItem twice using the names array
const fullNameGenerator = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

module.exports = { fullNameGenerator };