class MyString {

reverse(string) {
let arr = string.split('');
let arr = arr.reverse();
return arr.join('');
}
ucFirst(string) {
let str = string.slice(0, 1).toUpperCase() + string.slice(1);
return str;
}
ucWords(string) {
let arr = string.split(' ');
for(let i = 0; i < arr.length; i++) {
arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
return arr.join(' ');
}
}

let str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'