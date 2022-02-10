'use strict';
  const sum = (a,b) => {
    return a+b;
  }

  console.log(sum(+process.argv[2], +process.argv[3]));