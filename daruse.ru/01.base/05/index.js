'use strict';

const rls = require('readline-sync');

const str = rls.question('Enter text \n');

let arr = [];

const firstWord = (str.match(/^[а-я]*/i)[0]);
let otherWords = str.match(/[!\?\.]\s[а-я]*/gi);
otherWords = otherWords.map(word => word.slice(2));

arr = arr.concat(firstWord, otherWords);

console.log(arr);