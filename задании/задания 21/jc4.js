/*ЗАДАНИЕ 21*/


/*задача1*/

let strk5 = '12 34 56 78';
let men = strk5.replace(/([1-8]+)+([1-8]+)/g, '$2$1');
console.log(men);