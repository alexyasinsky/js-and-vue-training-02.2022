'use strict';


function counter(num) {
  return new Promise(
  () => {
    if (num <= 4) {
      setTimeout(()=>{
        console.log(num);
        counter(num+1);
      }, 1000)
    }
  }
)};

async function main(firstNum) {;
  await counter(firstNum);
  console.log('done');
}

main(1);