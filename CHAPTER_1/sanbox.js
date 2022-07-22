//template strings
const title = 'Best reads of 2022';
const author = 'Efosblack';
const likes = 30;

//concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

//template string way
let result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//creating html templstes
let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes} likes</span>
`;

console.log(html);