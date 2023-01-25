import * as utils from './utils.js';
import Vehicle from './Vehicle.js';
import { globalVariables } from '../src/globalVariables.js';

const app = (totalVehicles, timerId) => {
	const addVehicleToQueue = (totalVehicles) => {
		if (globalVariables.queue.length < 5) {
			globalVariables.queue.push(Vehicle.generateRandomVehicle());
			globalVariables.vehicleCount++;
		}
		if (globalVariables.vehicleCount >= totalVehicles) {
			clearInterval(buildCars);
			clearInterval(timerId);
			console.log('RUNNING TOTALS: ', globalVariables.runningTotals);
		}
	};
	const buildCars = setInterval(addVehicleToQueue, utils.randomCarCreationInterval, totalVehicles);
};

const timer = setInterval(utils.tick, 1000);

app(10, timer);
