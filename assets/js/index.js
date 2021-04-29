import { elements } from './base.js';
import { animateCounter, abbreviateNumber } from './utils.js';
import card from './view/card.js';
import overviewCard from './view/overviewCard.js';

//THEME CONTROLLER
const themeController = () => {
	//Theme Button functionality
	elements.themeCheckbox.addEventListener('change', () => {
		if (document.body.className === 'light') {
			document.body.className = 'dark'
			localStorage.setItem('theme', 'dark');
		}
		else {
			document.body.className = 'light';
			localStorage.setItem('theme', 'light')
		}
	});

	//Theme localStorage
	const theme = localStorage.getItem('theme');
	if (theme !== null) {
		if (theme === 'dark') {
			elements.themeCheckbox.checked = true;
		}
		else elements.themeCheckbox.checked = false;
		document.body.className = theme;
	}
}


window.onload = async () => {
	themeController();

	let sourceData = null;
	await fetch('../../data.json')
		.then(response => response.json())
		.then(data => {
			sourceData = data;
		})
		.catch(error => {
			sourceData = null;
			console.log('Error fetching JSON: '+ error);
		});

	if(sourceData)
	{
		elements.cardsContainer.innerHTML = '';
		elements.overviewCardsContainer.innerHTML = '';
		Object.keys(sourceData).forEach(socialMedia => {
			card(socialMedia, sourceData[socialMedia]);
			overviewCard(socialMedia, sourceData[socialMedia].daily_report);
		});
	}
	else{
		elements.cardsContainer.innerHTML = '<h3 class="subtitle">Something went wrong. No data was found!</h3>';
	}
	
	//Add animation to numbers
	const countUpElements = document.querySelectorAll('.counter');
	countUpElements.forEach((el) => {
		animateCounter(el, abbreviateNumber);
	});
}