'use strict';

const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

new Promise(
  (resolve, reject) => {
   const number = randomNumber(10);
   setTimeout(() => {
     number <= 5 ? resolve('succeed') : reject ('failed');
   }, number * 1000)
  }
).then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
})



