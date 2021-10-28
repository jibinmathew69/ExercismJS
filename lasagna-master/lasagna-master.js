export function cookingStatus(time){
	if(time == undefined){
		return 'You forgot to set the timer.';
	}else if(time === 0){
		return 'Lasagna is done.';
	}else{
		return 'Not done, please wait.';
	}
}

export function preparationTime(layers, avgTime=2){
	return layers.length * avgTime;
}

export function quantities(layers){
	function layerQuantity(layers, filterItem, quantity){
		numLayer = layers.filter(layer === filterItem).length;
		return numLayer * quantity;
	}
	
	return {
		noodles: layerQuantity(layers,'noodles', 50),
		sauce: layerQuantity(layers, 'sauce', 0.4)
	}
}

export function addSecretIngredient(friendsList, myList){
	myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, portions){
	function requiredQuantity(forTwo){
		return (forTwo*quantity)/2;
	}
	let required = {};
	
	for(item in recipe){
		required[item] = requiredQuantity(recipe[item]);
	}
	return required;
}
