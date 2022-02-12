
'use strict';

const counter = (start, end) => {
  return new Promise((resolve) => {
    for (let i = start; i <= end; i++ ) {
      setTimeout(() => {
        console.log(i);
        if (i === end) {
          resolve();
        }
      },i*1000)
    }
  })
}

(async () => {
  await counter(1, 4);
  console.log('done');
})();
