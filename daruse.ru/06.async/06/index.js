'use strict';

import fetch from 'node-fetch';

(async () => {
  let list = {};
  const request = await fetch('https://jsonplaceholder.typicode.com/users');
  if (request.ok) {
    request.json().then((data) => {
      list = data;
      console.log(list);
    })
  } else {
    console.log('error');
  }

})();