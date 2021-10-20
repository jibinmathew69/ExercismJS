export function totalBirdCount(birdsPerDay) {
	let count = 0;
	forEach(birds in birdsPerDay){
		count += birds;
	}
	return count;
}

export function birdsInWeek(birdsPerDay, week) {
	let count = 0;
	let startDay = (week-1)*7;
	for(let i=startDay; i<startDay+7;i++){
		count	+= birdsPerDay[i];
	}
	return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  throw new Error('Please implement the fixBirdCountLog function');
}
