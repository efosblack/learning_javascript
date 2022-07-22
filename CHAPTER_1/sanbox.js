//arrays
let ninjas = ['efe', 'ryu', 'lu-kang'];

// ninjas[1] = 'jet-li';
// console.log(ninjas);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['efe', 'crystal', 30,20];
// console.log(random);

//console.log(ninjas.length);

// array methods

//let result = ninjas.join(',');
//let result = ninjas.indexOf('lu-kang');
//let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken'); //destructive method
result = ninjas.pop(); //destructive method

console.log(result);