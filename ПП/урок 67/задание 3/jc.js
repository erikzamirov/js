class Rectangle {
constructor (width, height) {
this.elem = document.createElement('div');
this.setWidth(width);
this.setHeight(height);
this.elem.style.border = '1px solid red';

document.body.appendChild(this.elem);
}

setWidth(width) {
this.elem.style.width = width + 'px';
}
getWidth(width) {
return parseInt(this.elem.style.width);
}
setHeight(height) {
this.elem.style.height = height + 'px';
}
getHeight(height) {
return parseInt(this.elem.style.height);
}
}

var elem = new Rectangle(300, 400);
elem.setWidth(600);
alert(elem.getWidth());
elem.setHeight(800);
alert(elem.getHeight());