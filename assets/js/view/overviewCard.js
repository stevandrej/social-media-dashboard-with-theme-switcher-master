import { elements } from '../base.js';

const overviewCard = (socialMedia, data) => {
	data.map(el => {
		const markup =
			`<div class="card-small">
				<div class="card-small__top">
					<div class="card-small__top__activity">${el.data_info}</div>
					<div class="card-small__top__social-logo"><img src="assets/img/icon-${socialMedia}.svg" alt="social media icon"/></div>
				</div>
				<div class="card-small__bottom">
					<div class="card-small__bottom__result counter">${el.data_result}</div>
					${
						el.percentage < 0 ? 
						'<div class="card-small__bottom__progress"><img class="card-small__bottom__progress__icon" src="/assets/img/icon-down.svg" alt="progress icon"> <span class="card-small--red">'+Math.abs(el.percentage)+'%</span></div>':
						'<div class="card-small__bottom__progress"><img class="card-small__bottom__progress__icon" src="/assets/img/icon-up.svg" alt="progress icon"> <span class="card-small--green">'+Math.abs(el.percentage)+'%</span></div>'
					}
				</div>
			</div>`

		elements.overviewCardsContainer.insertAdjacentHTML('beforeend', markup);
	})
}

export default overviewCard;