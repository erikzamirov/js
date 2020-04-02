let theme = querySelector('.theme');
let text = querySelector('.text');
let button = querySelector('.button');
let records = querySelector('.records');
let recordsTitle = querySelector('.recordsTitle');
let lSLength = localStorage.length;

//localStorage.clear();

if (lSLength > 0) {
recordsTitle.style.display = 'block';
for (let i = 0; i < lSLength; i++) {
let record = get(i);
createRecord(record);
}
}

function createRecord(record){
let h2 = document.createElement('h2');
let p = document.createElement('p');
h2.innerHTML = record.theme;
p.innerHTML = record.text;
records.appendChild(h4);
records.appendChild(p);

}

button.addEventListener('click', function(){
if (theme.value !== '') {
let record = {
'theme': theme.value,
'text': text.value
};
set(lSLength, record);
createRecord(record);

} else {
theme.style.borderColor="red";
}
});

function get(id){
let json = localStorage.getItem(id);
return JSON.parse(json);
}
function set(id, val){
let json = JSON.stringify(val);
return localStorage.setItem(id, json);
}

function querySelector(val){return document.querySelector(val);
}