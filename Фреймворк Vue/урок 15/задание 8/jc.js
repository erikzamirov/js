let vue = new Vue({
	el: '#app',
	data: {
		date: '2020-04-28',
	},
	filters: {
		date: function(value){
			return value.split('.').reverse().join('.');
		}
	}
});