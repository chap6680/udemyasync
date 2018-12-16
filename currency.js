const axios = require('axios');

const getExchangeRate = (from, to) => {
	return axios.get('http://data.fixer.io/api/latest?access_key=3e9b9c5290cce2d731fb36089cd7c7ca&format=1').then((response) => {
		console.log('response: ', response.data.rates[to]);
		const euro = 1 / response.data.rates[from];
		const rate = euro * response.data.rates[to];
		return rate;
	});
};

getExchangeRate('USD', 'CAD').then((rate) => { 
	console.log(rate);
})

