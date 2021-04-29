import { elements } from '../base.js';

const cardView = ({socialMedia, user, followers, followers_type, new_followers} = data) => {
	const markup =
		`<div class="card card--${socialMedia}">
			<div class="card__user"><img src="assets/img/icon-${socialMedia}.svg" alt="social media icon" /> ${user}</div>
			<div class="card__content">
				<span class="card__content__result counter">${followers}</span>
				<span class="card__content__followers">${followers_type}</span>
			</div>
			${new_followers >= 0 ?
			'<div class="card__progress card__progress--green animation-pulsate"><img class="card__progress__icon" src="assets/img/icon-up.svg" alt="progress icon" />' :
			'<div class="card__progress card__progress--red animation-pulsate"><img class="card__progress__icon" src="assets/img/icon-down.svg" alt="progress icon" />'
		}
				<span class="card__progress__today">${Math.abs(new_followers)} Today</span>
			</div>
		</div>`

	elements.cardsContainer.insertAdjacentHTML('beforeend', markup);
}

export default cardView;