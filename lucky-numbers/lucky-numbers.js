
export function twoSum(array1, array2) {
	return Number(String(array1).replace(/,/g, '')) + Number(String(array2).replace(/,/g, ''));
}

export function luckyNumber(value) {
	value = String(value);
	let revString = [...value].reverse().join("");
	return value === revString;
}

export function errorMessage(input) {
	if(input === ''||input === null||input === undefined){
		return "Required field";
	}else if(isNaN(Number(input)) || Number(input) === 0){
		return "Must be a number besides 0";
	}else{
		return "";
	}
}
