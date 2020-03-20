/*ЗАДАНИЕ 19*/





/*задача 1*/
let strk = 'site.ru sss site.com zzz site.net';

let mas = strk.match(/s..e+/g, '!');
console.log(mas);


/*задача2*/
let strk2 = 'a1b c34d x567z';

let mas2 = strk2.match(/1|3|4|5|6+/g, '!');
let ma = 0;
for(let i=0; i<mas2.length; i++){
ma = ma+Number(mas2[i]);
}
console.log(ma);



