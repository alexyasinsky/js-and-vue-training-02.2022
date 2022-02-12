'use strict';

const rls = require('readline-sync');

const number = +rls.question('Введите число: ');

const sqr = (num) => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        num = Math.pow(num, 2);
        console.log(num);
        resolve(num);
      }, 3000)
    }
  )
}
new Promise(
  (resolve) => {
    resolve(number);
  }
).then((number) => {
  return sqr(number);
}).then((number) => {
  return sqr(number);
}).then((number) => {
  return sqr(number);
}).then((number) => {
  console.log(`result is ${number}`)
})