//Switch theme style
document.getElementById('theme-toggle').addEventListener('change', () => {
	document.body.className === 'light' ? document.body.className = 'dark' : document.body.className = 'light';
})