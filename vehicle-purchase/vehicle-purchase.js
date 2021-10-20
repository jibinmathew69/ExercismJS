export function needsLicense(kind) {
	return kind === 'car'?true:false;
}

export function chooseVehicle(option1, option2) {
	return option1>option2?option1:option2;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  throw new Error('Please implement the calculateResellPrice function');
}
