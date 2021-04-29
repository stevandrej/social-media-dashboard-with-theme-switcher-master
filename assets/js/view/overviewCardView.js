import { elements } from '../base.js';

const overviewCardView = ({socialMedia, data_info, data_result, percentage} = data) => {
	const markup =
		`<div class="card-small">
				<div class="card-small__top">
					<div class="card-small__top__activity">${data_info}</div>
					<div class="card-small__top__social-logo"><img src="assets/img/icon-${socialMedia}.svg" alt="social media icon"/></div>
				</div>
				<div class="card-small__bottom">
					<div class="card-small__bottom__result counter">${data_result}</div>
					${percentage < 0 ?
			'<div class="card-small__bottom__progress"><img class="card-small__bottom__progress__icon" src="/assets/img/icon-down.svg" alt="progress icon"> <span class="card-small--red">' + Math.abs(percentage) + '%</span></div>' :
			'<div class="card-small__bottom__progress"><img class="card-small__bottom__progress__icon" src="/assets/img/icon-up.svg" alt="progress icon"> <span class="card-small--green">' + Math.abs(percentage) + '%</span></div>'
		}
				</div>
			</div>`

	elements.overviewCardsContainer.insertAdjacentHTML('beforeend', markup);
}

export default overviewCardView;