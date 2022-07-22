let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25'); (type conversion makes the string a number)
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

console.log(age === 25);
console.log(age === '25'); //(no type conversion)
console.log(age !== 25);
console.log(age !== '25');