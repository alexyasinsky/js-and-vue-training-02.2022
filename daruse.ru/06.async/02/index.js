'use strict';

const counter = (num) => {
  return new Promise((resolve) => {
    for (let i = num; i <= 4; i++ ) {
      setTimeout(() => {
        console.log(i);
      }, 1000)
    }
    resolve();
  })
}
counter(1).then(()=> {
  console.log('done');
});

