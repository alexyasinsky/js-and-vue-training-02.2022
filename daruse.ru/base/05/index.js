'use strict';

const rls = require('readline-sync');

const str = rls.question('Enter text \n');

let arr = [];

arr.push(str.match(/[!\?\.] /gi));

console.log(arr);