export default class overviewCardModel {
	constructor(){
		this.items = [];
	}

	addItem({socialMedia, data_info, data_result, percentage} = data){
		const item = {
			socialMedia,
			data_info,
			data_result,
			percentage
		}
		this.items.push(item);
		return item;
	}
}