/*ЗАДАНИЕ 22*/


// Задача 2

let strk6 = 'sss site.ru zzz site.com kkk';
let res = strk6.replace(/[a-z]+?\.[a-z]+?\s/g, "<a href='http://site.ru'>site.ru</a> ");
console.log(res);