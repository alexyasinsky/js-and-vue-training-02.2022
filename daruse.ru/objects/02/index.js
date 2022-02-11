'use strict';

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multyplyNumeric = obj => {
  for (let key in obj) {
    if (typeof(obj[key]) === 'number') {
      obj[key] = obj[key]*2;
    }
  }
}

multyplyNumeric(menu);

console.log(menu);