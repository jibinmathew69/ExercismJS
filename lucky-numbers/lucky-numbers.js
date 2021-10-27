
export function twoSum(array1, array2) {
	return Number(String(array1).replace(',', '')) + Number(String(array2).replace(',', ''));
}

export function luckyNumber(value) {
	value = String(value);
	let revString = [...value].reverse().join("");
	return value === revString;
}

export function errorMessage(input) {
	if(input === ''){
		throw new Error("Required field");
	}else if(Number(input) === NaN || Number(input) === 0){
		throw new Error("Must be a number besides 0");
	}else{
		return "";
	}
}
