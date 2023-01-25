import * as utils from './utils.js';
import Pump from './Pump.js';
import { globalVariables } from './globalVariables.js';

const pumps = [new Pump(1), new Pump(4), new Pump(7), new Pump(2), new Pump(5), new Pump(8), new Pump(3), new Pump(6), new Pump(9)];

export const generateRandomVehicle = (vehicle) => {
	vehicle.vehicleType = utils.populateTypes(globalVariables.vehicles);
	if (vehicle.vehicleType === globalVariables.vehicles[2]) {
		vehicle.tankCapacity = globalVariables.HGVTankCapacity;
		vehicle.fuelGauge = utils.generateRandomNumber(globalVariables.emptyTank,	globalVariables.vehicle.tankCapacity / globalVariables.divisor,	1);
		vehicle.fuelType = globalVariables.fuels[0];
	}
	if (vehicle.vehicleType === globalVariables.vehicles[1]) {
		vehicle.tankCapacity = globalVariables.vanTankCapacity;
		vehicle.fuelGauge = utils.generateRandomNumber(globalVariables.emptyTank,	globalVariables.vehicle.tankCapacity / globalVariables.divisor,	1);
		const fuelsCopy = [...globalVariables.fuels];
		fuelsCopy.pop();
		vehicle.fuelType = utils.populateTypes(fuelsCopy);
	}
	if (vehicle.vehicleType === globalVariables.vehicles[0]) {
		vehicle.tankCapacity = globalVariables.carTankCapacity;
		vehicle.fuelGauge = utils.generateRandomNumber(globalVariables.emptyTank,	globalVariables.vehicle.tankCapacity / globalVariables.divisor,	1);
		vehicle.fuelType = utils.populateTypes(globalVariables.fuels);
	}
	return vehicle;
};

export const tick = () => {
	globalVariables.currentSecond++;

	pumps.forEach(pump => {
		if (pump.isPumpFree() && globalVariables.queue.length > 0) {
			const refuellingVehicle = globalVariables.queue.shift();
      pump.startRefuel(refuellingVehicle, globalVariables.currentSecond);
		}else if (!pump.isPumpFree()) {
			const secondsElapsed = globalVariables.currentSecond - pump.occupiedAt;
			if (secondsElapsed >= pump.secondsToRefill) {
				const receiptTransaction = pump.endRefuel();
        updateRunningTotals(receiptTransaction);
				console.log(globalVariables.runningTotals);
      }
		}
	})
}

export const updateRunningTotals = (transaction) => {
	globalVariables.runningTotals.transactions.push(transaction);
	globalVariables.runningTotals.totalLitresDispensed +=	transaction.litresDispensed;
	globalVariables.runningTotals.totalVehiclesFuelled++;
};
