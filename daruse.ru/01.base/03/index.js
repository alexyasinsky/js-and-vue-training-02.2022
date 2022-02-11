'use strict';

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Введите ваш пол: ', function (input) {

    switch(input) {
      case 'M':
        console.log(`Ваш пол мужской`);
        break;
      case 'F':
        console.log(`Ваш пол женский`);
        break;
      default:
        console.log(`Ваш пол не определен`);
    }
    
    rl.close();

});

rl.on('close', function () {
    process.exit(0);
});