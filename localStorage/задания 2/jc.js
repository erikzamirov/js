let textr = querySelector('textarea'),
left = querySelector('.left'),
right = querySelector('.right'),
Length = localStorage.length;

//localStorage.clear();

function chechLength() {
if (localStorage.length > 0) {
left.style.display = 'block';
right.style.display = 'block';
} else {
left.style.display = 'none';
right.style.display = 'none';
}
}
chechLength();

textr.addEventListener('blur', function(){
let textvalue = textr.value;
let length = localStorage.length;
localStorage.setItem(length, textvalue);
chechLength();
});

left.addEventListener('click', function(){
Length--;
if (Length < 0){
Length++;
}
textr.value = get(Length);
});

right.addEventListener('click', function(){
Length++;
if (Length > localStorage.length-1){
Length--;
}
if (Length === localStorage.length){
Length--;
console.log('111');
}
console.log(localStorage.length, Length);
textr.value = get(Length);
});


function get(id) {return localStorage.getItem(id);
}

function querySelector(val){return document.querySelector(val);
}