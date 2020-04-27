let app = new Vue({
	el: '#app',
	data: {
		arr: [44,2,77,-8,1,4, -12, 11],
	},
	methods: {
		square: 
		function(index){
this.arr.splice(index,1,Math.pow(this.arr[index],2));
},
},
});