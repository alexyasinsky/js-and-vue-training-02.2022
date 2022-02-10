'use strict';

const rls = require('readline-sync');

// let rls = readlineSync.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const name = rls.question('Enter name: ');
const surname = rls.question('Enter surname: ');
const age = rls.question('Enter your age: ');

console.log(`Привет, ${name} ${surname}, с возрастом ${age} лет`);
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question('Введите имя, фамилию и возраст \n', function (input) {

//     let arr = input.split(' ');
//     console.log(`Привет, ${arr[0]} ${arr[1]}, с возрастом ${arr[2]} лет`);
//     rl.close();

// });

// rl.on('close', function () {

    
//     process.exit(0);
// });


// console.log(arr);
