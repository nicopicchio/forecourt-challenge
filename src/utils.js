export const generateRandomArrayIndex = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomNumber = (minValue, maxValue, decimalPlace) => {
	const generatedNumber = Math.random() * (maxValue - minValue) + minValue;
	return Number(generatedNumber.toFixed(decimalPlace));
};

export const randomInterval = generateRandomNumber(1500, 2200, 0);
