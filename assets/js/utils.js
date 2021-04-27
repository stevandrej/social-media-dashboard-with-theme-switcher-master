//Display large numbers with Suffix [K, M, B...]
export const abbreviateNumber = (value) => {
	var newValue = value;
	if (value >= 10000) {
		var suffixes = ["", "k", "m", "b", "t"];
		var suffixNum = Math.floor(("" + value).length / 3.5);
		var shortValue = '';
		for (var precision = 2; precision >= 1; precision--) {
			shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
			var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
			if (dotLessShortValue.length <= 2) { break; }
		}
		if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
		newValue = shortValue + suffixes[suffixNum];
	}
	return newValue;
}

//Counter animation
export const animateCounter = (el, numberFormater) => {
	const animationDuration = 2000;
	const frameDuration = 1000 / 60;
	const totalFrames = Math.round(animationDuration / frameDuration);
	const easeOutQuad = t => t * (2 - t);

	let frame = 0;
	const countTo = parseInt(el.innerHTML, 10);
	const counter = setInterval(() => {
		frame++;
		const progress = easeOutQuad(frame / totalFrames);
		const currentCount = Math.round(countTo * progress);
		if (parseInt(el.innerHTML, 10) !== currentCount) {
			if (numberFormater !== undefined) {
				el.innerHTML = numberFormater(currentCount);
			}
			else
				el.innerHTML = currentCount;
		}

		if (frame === totalFrames) {
			clearInterval(counter);
		}
	}, frameDuration);
};