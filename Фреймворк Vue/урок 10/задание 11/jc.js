let arr = ['Мерс', 'БМВ', 'Ягуар', 'Лада', 'Танка']; 

let vue = new Vue({
	el: '#app',
	data: {
		options: arr,
		select: arr[2],
	},
});