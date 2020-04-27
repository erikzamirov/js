let vue = new Vue({
	el: '#app',
	data: {
		text: '',
		str: [],
	},
	methods:{
		textToArray: function(){
			this.text != '' ? this.str = this.text.split(' ') :
			 this.str = [];
		}
	}
});