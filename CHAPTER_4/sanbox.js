// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@company.com',
    location: 'south pole',
    blogs: ['why mac and cheese rules', '10 things i love about berlin']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

user['name'] = 'blaq';
console.log(user['name']);

const key = 'location';
console.log(user[key]);

console.log(typeof user);