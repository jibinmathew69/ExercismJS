export function needsLicense(kind) {
	return kind === 'car'?true:false;
}

export function chooseVehicle(option1, option2) {
	choice = option1<option2?option1:option2;
	return choice + " is clearly the better choice."
}

export function calculateResellPrice(originalPrice, age) {
	if (age<3){
		return 0.8*originalPrice;
	}else if(age>10){
		return 0.5*originalPrice;
	}else{
		return 0.7*originalPrice;
	}
}
