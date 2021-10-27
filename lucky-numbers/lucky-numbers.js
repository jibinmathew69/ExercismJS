
export function twoSum(array1, array2) {
	return Number(String(array1).replace(',', '')) + Number(String(array2).replace(',', ''));
}

export function luckyNumber(value) {
	value = String(value);
	let revString = [...value].reverse().join("");
	return value === revString;
}

export function errorMessage(input) {
  throw new Error('Implement the errorMessage function');
}
