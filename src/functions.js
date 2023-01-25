import Pump from './Pump.js';
import { globalVariables } from './globalVariables.js';

const pumps = [
	new Pump(1),
	new Pump(4),
	new Pump(7),
	new Pump(2),
	new Pump(5),
	new Pump(8),
	new Pump(3),
	new Pump(6),
	new Pump(9),
];

export const tick = () => {
	globalVariables.currentSecond++;
	pumps.forEach((pump) => {
		if (pump.isPumpFree() && globalVariables.queue.length > 0) {
			const refuellingVehicle = globalVariables.queue.shift();
			pump.startRefuel(refuellingVehicle, globalVariables.currentSecond);
		} else if (!pump.isPumpFree()) {
			const secondsElapsed = globalVariables.currentSecond - pump.occupiedAt;
			if (secondsElapsed >= pump.secondsToRefill) {
				const receiptTransaction = pump.endRefuel();
				updateRunningTotals(receiptTransaction);
				console.log(globalVariables.runningTotals);
			}
		}
	});
};

export const updateRunningTotals = (transaction) => {
	globalVariables.runningTotals.transactions.push(transaction);
	globalVariables.runningTotals.totalLitresDispensed +=	transaction.litresDispensed;
	globalVariables.runningTotals.totalVehiclesFuelled++;
};
