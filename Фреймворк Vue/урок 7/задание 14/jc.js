let app = new Vue({
	el: '#app',
	data: {
		show: true,
	},
	methods:{
		hide: function(){
			this.show = this.show ? false : true;
			
			if (this.show == true) {
			function changeText() {
  return document.querySelector("#button").innerHTML = "скрыть абзац";
}

document.addEventListener("click", changeText);

			}

			if (this.show == false) {
			function changeText() {
  return document.querySelector("#button").innerHTML = "показать абзац ";
}

document.addEventListener("click", changeText);

			}
			
		}
	}
});