import { animateCounter, abbreviateNumber } from './utils.js';

//Switch theme style
document.getElementById('theme-toggle').addEventListener('change', () => {
	document.body.className === 'light' ? document.body.className = 'dark' : document.body.className = 'light';
})

window.onload = async () => {
	//Add animation to numbers
	const countUpElements = document.querySelectorAll('.counter');
	countUpElements.forEach((el) => {
		animateCounter(el, abbreviateNumber);
	});
}