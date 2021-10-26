
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
	if(humidityPercentage > 70){
		throws new Error("High Humidity");
	}
}

export function reportOverheating(temperature) {
  throw new Error('Implement the reportOverheating function');
}

export function monitorTheMachine(actions) {
  throw new Error('Implement the monitorTheMachine function');
}
