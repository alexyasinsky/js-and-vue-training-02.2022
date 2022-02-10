'use strict';

const rls = require('readline-sync');

const name = rls.question('Введите имя: ');
const time = new Date();
const hour = +time.getHours();
if (hour >= 6 && hour < 12) {
    console.log('Доброе утро, ' + name);
}
if (hour >= 12 && hour < 18) {
    console.log('Добрый день, ' + name);
}
if (hour >= 18 && hour < 22) {
    console.log('Добрый вечер, ' + name);
}
if (hour >= 22 || hour < 6) {
    console.log('Доброй ночи, ' + name);
}