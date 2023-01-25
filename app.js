import * as appFunction from './functions.js';
import * as utils from './utils.js';
import { globalVariables } from './globalVariables.js';

const app = (totalVehicles, timerId) => {
	const addVehicleToQueue = (totalVehicles) => {
		if (globalVariables.queue.length < 5) {
			globalVariables.queue.push(appFunction.generateRandomVehicle(globalVariables.vehicle));
			globalVariables.vehicleCount++;
		}
		if (globalVariables.vehicleCount >= totalVehicles) {
			clearInterval(buildCars);
			clearInterval(timerId);
		}
	};
	const buildCars = setInterval(addVehicleToQueue, utils.randomInterval, totalVehicles);
};

const timer = setInterval(appFunction.tick, 1000);

app(10, timer);
