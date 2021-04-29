const loadDataController = async () =>{
	let data;
	await fetch('../../data.json')
		.then(response => response.json())
		.then(dataResponse => {
			data = dataResponse;
		})
		.catch(error => {
			data = null;
			console.log('Error fetching JSON: '+ error);
		});
	return data;
}

export default loadDataController;