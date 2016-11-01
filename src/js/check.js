function getMessage(a, b) { 
if (typeof a === 'boolean') {
	if (a === true) {
	return 'Я попал в ' + b;
}
	if (a === false) {
	return 'Я никуда не попал';
}
}
if (typeof a === 'number') {
	return 'Я прыгнул на ' + a * 100 + ' сантиметров';
}
if (Array.isArray(a) && !Array.isArray(b)) {
	var numberOfSteps = 0;

	for (var i = 0; i < a.length; i++) {
		numberOfSteps = numberOfSteps + a[i];
}
	return 'Я прошёл ' + numberOfSteps + ' шагов';
}
if (Array.isArray(a) && Array.isArray(b)) {
	var distancePath = 0;

	for (var i = 0; i < a.length && i < b.length; i++) {
		distancePath = distancePath + a[i] * b[i];
}
	return 'Я прошёл ' + distancePath + ' метров';
}
else {
	return 'Переданы некорректные данные';
}
};
