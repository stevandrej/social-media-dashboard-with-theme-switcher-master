import { elements } from './base.js';
import { animateCounter, abbreviateNumber } from './utils.js';
import themeController from './controller/themeController.js';
import loadDataController from './controller/loadDataController.js'
import cardModel from './model/cardModel.js';
import overviewCardModel from './model/overViewCardModel.js';
import cardView from './view/cardView.js';
import overviewCardView from './view/overviewCardView.js';

const state = {
	cards: null,
	overviewCards: null
};

window.onload = async () => {
	themeController();

	//LOAD DATA JSON
	const sourceData = await loadDataController();

	//CARDS
	if (sourceData) {
		let cardsModel = new cardModel();
		let overviewCardsModel = new overviewCardModel();

		elements.cardsContainer.innerHTML = '';
		elements.overviewCardsContainer.innerHTML = '';

		Object.keys(sourceData).forEach(socialMedia => {
			cardsModel.addItem(socialMedia, { ...sourceData[socialMedia] });

			sourceData[socialMedia].daily_report.forEach(element => {
				overviewCardsModel.addItem({ socialMedia, ...element })
			});

			state.cards = cardsModel.items;
			state.overviewCards = overviewCardsModel.items;
		});
		state.cards.forEach(el => {
			cardView(el)
		});
		state.overviewCards.forEach(el => {
			overviewCardView(el)
		})
	}
	else {
		elements.cardsContainer.innerHTML = '<h3 class="subtitle">Something went wrong. No data was found!</h3>';
	}

	//ADD ANIMATION TO NUMBERS
	const countUpElements = document.querySelectorAll('.counter');
	countUpElements.forEach((el) => {
		animateCounter(el, abbreviateNumber);
	});
}