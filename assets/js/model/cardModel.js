export default class cardModel {
	constructor(){
		this.items = [];
	}

	addItem(socialMedia, {user, followers, followers_type, new_followers}){
		const item = {
			socialMedia,
			user,
			followers,
			followers_type,
			new_followers
		}
		this.items.push(item);
		return item;
	}
}