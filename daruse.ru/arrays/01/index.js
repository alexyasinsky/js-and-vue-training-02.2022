const rls = require('readline-sync');

const str = rls.question('Enter array: ');
const array = str.split(' ');

let result = false;

array.forEach(item => {
  if (+item % 2 === 1) {
    result = true;
  }
})
console.log(array);
console.log(result);
