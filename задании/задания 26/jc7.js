/*ЗАДАНИЕ 26*/


// Задача1

let strk8 = 'aaa [2] bbb [3] ccc [12] ddd';
let res3 = strk8.replace(/\d+/g, function (match){
  return match*2;
});
console.log(res3);


