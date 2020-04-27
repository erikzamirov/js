let vue = new Vue({
	el: '#div',
	data: {
		text: 'текст',
	},
	methods: {
		changeText: function(){
			this.text = 'Текст поменялся';
		}
	},
});