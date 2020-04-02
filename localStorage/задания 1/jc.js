let texter = querySelector('textarea');

texter.value = localStorage.getItem('text');

window.onbeforeunload = function(){
localStorage.setItem('text', texter.value);
};

function querySelector(val){
	return document.querySelector(val);
}