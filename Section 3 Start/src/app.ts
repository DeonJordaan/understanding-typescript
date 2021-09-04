const button = document.querySelector('button')!;

// Max's example with if-check
// if (button) {
// 	button.addEventListener('click', () => {
// 		console.log('Clicked!');
// 	});
// }

// Prettier solution inserted by Autocomplete via Optional Chaining ?'
button?.addEventListener('click', () => {
	console.log('Clicked!');
});
