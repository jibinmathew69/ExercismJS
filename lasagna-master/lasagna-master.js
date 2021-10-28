export function cookingStatus(time){
	if(time == undefined){
		return 'You forgot to set the timer.';
	}else if(time === 0){
		return 'Lasagna is done.';
	}else{
		return 'Not done, please wait.';
	}
}
