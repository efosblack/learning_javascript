// callbacks and foreach

// const myFunc = (callbackfunc) => {
//     // do nsomething
//     let value = 50;
//     callbackfunc(value);
// };

// myFunc(value => {
//     //do something
//     console.log(value);
// });


let people = ['mario', 'luigi', 'ryu', 'blaq', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);