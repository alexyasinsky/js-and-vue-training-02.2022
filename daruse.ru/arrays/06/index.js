'use strict';

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


function arrayQuery() {
  return new Promise(
    resolve => {
      rl.question('Enter name and age of person: ', input => {
        const name = input.match(/[a-zа-я]/ig).join('');
        const age = input.match(/\d/g).join('');
        const person = {name, age};
        resolve(person);
      })
    }
  )
}

let arr = [];

const main = async () => {
  arr.push(await arrayQuery());
  arr.push(await arrayQuery());
  arr.push(await arrayQuery());
  console.log(arr);
  rl.close();
}

rl.on('close', () => {
  process.exit(0);
});

main();


