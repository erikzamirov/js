let app = new Vue({
	el: '#app',
	data: {
		items: [1, -3, 12, 4, 8, 13, -9],
	},
	methods: {
		fil: function() {
			this.items= this.items.filter(function(elem){
			return (elem > 0 && elem < 10) ? true : false;
		});
	},
},
});