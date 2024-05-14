const open = document.querySelectorAll('.plus');
const close = document.querySelectorAll('.minus');

function displayAnswer(plusIcon) {
	plusIcon.addEventListener('click', () => {
		const question = plusIcon.closest('.question');
		const answer = question.nextElementSibling;
		const minusIcon = plusIcon.nextElementSibling;

		answer.hidden = false;

		plusIcon.hidden = true;
		minusIcon.hidden = false;
	});
}

function closeAnswer(minusIcon) {
	minusIcon.addEventListener('click', () => {
		const question = minusIcon.closest('.question');
		const answer = question.nextElementSibling;
		const plusIcon = minusIcon.previousElementSibling;

		answer.hidden = true;

		minusIcon.hidden = true;
		plusIcon.hidden = false;
	});
}

for (const plusIcon of open) {
	displayAnswer(plusIcon);
}

for (const minusIcon of close) {
	closeAnswer(minusIcon);
}
