import { checkStatus, checkInventory } from './grocer';
export function isServiceOnline() {
	return checkStatus((status) => status === 'ONLINE');
}

export function pickFruit(variety, quantity, callback) {
	return checkInventory({
													variety: variety,
													quantity: quantity
												}, callback);
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
	if(err){
		throw new Error(err);
	}

	if(err == null){
		if (isAvailable){
			return "PURCHASE";
		}else{
			return "NOOP";
		}
	}
}

export function pickAndPurchaseFruit(variety, quantity) {
	return pickFruit(variety, quantity, purchaseInventoryIfAvailable);
}
