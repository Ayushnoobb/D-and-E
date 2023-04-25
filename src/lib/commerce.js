const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://aliexpress-datahub.p.rapidapi.com/item_detail',
  params: {itemId: '3256804591426248'},
  headers: {
    'X-RapidAPI-Key': '3d35ca90e5msh8a5041d361183dep1d5a19jsn8d38140a73fe',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});