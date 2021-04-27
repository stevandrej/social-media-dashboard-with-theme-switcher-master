import { elements } from './base.js';
import { animateCounter, abbreviateNumber } from './utils.js';

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

	//Add animation to numbers
	const countUpElements = document.querySelectorAll('.counter');
	countUpElements.forEach((el) => {
		animateCounter(el, abbreviateNumber);
	});
}