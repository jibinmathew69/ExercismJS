export function isServiceOnline(checkStatus) {
	return checkStatus()==='ONLINE'? true: false;
}

export function pickFruit(variety, quantity, callback) {
	return checkInventory({
													variety: variety,
													quantity: quantity
												}, callback);
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  throw new Error('Implement the purchaseInventoryIfAvailable function');
}

export function pickAndPurchaseFruit(variety, quantity) {
  throw new Error('Implement the pickAndPurchaseFruit function');
}
