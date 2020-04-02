let theme = querySelector('.theme');
let text = querySelector('.text');
let button = querySelector('.button');
let records = querySelector('.records');
let recordsTitle = querySelector('.recordsTitle');
let recordBook = get('recordBook');

let date = querySelector('#date');
let dateText = querySelector('.dateText');
let dateRecord = get('dateRecord');

let name = querySelector('.name');
let phone = querySelector('.phone');
let phones = querySelector('.phones');
let phonesButton = querySelector('.phonesButton');
let phonesTitle = querySelector('.phonesTitle');
let contactRecord = get('contactRecord');

if (recordBook !== null){
var recordBookLength = Object.keys(recordBook).length;
} else {
var recordBookLength = 0;
}
if (contactRecord !== null){
var recordContactLength = Object.keys(contactRecord).length;
} else {
var recordContactLength = 0;
}

//localStorage.clear();