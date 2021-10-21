const DRINK_TIME = {
	'Pure Strawberry Joy': 0.5,
	'Energizer': 1.5,
	'Green Garden': 1.5,
	'Tropical Island': 3,
	'All or Nothing': 3,
}

const WEDGES = {
	'small': 6,
	'medium': 8,
	'large': 10,
}

export function timeToMixJuice(name) {
	return DRINK_TIME[name] || 2.5;
}

export function limesToCut(wedgesNeeded, limes) {
	let count = 0;
	while (wedgesNeeded>0 && count<limes.length){
		wedgesNeeded -= WEDGES[limes[count]]
		count += 1;
	}
	return count;
}

export function remainingOrders(timeLeft, orders) {
	let count = 0;
	while(timeLeft>0 && count<orders.length){
		timeLeft -= timeToMixJuice(orders[count]);
		count += 1;
	}
	return orders.slice(count) || [];
}
