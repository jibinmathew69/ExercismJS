
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
	if(humidityPercentage > 70){
		throw new Error("High Humidity");
	}
}

export function reportOverheating(temperature) {
	if(temperature === null){
		throw new ArgumentError();
	}else if(temperature>500){
		throw new OverheatingError(temperature);
	} 
}

export function monitorTheMachine(actions) {
  throw new Error('Implement the monitorTheMachine function');
}
