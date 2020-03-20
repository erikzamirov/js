
/*ЗАДАНИЕ 20*/

/*задача1*/

let strk3 = 'sss domain.ru zzz';

let kar = strk3.match(/d(omain.r)u/);

console.log(kar[0]);


/*задача2*/
let strk4 = '31.12.2025';

let kar2 = strk4.match(/(31).(12).(2025)/);

console.log(kar2[1]);
console.log(kar2[2]);
console.log(kar2[3]);