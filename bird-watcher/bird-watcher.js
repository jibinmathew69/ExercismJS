export function totalBirdCount(birdsPerDay) {
	let count = 0;
	for(birds in birdsPerDay){
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

export function fixBirdCountLog(birdsPerDay) {
	for(let i=0; i<birdsPerDay.length; i+=2){
		birdsPerDay[i] += 1;
	}
	return birdsPerDay;
}
