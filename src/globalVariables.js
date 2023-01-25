export const globalVariables = {
	vehicles: ['Car', 'Van', 'HGV'],
	fuels: ['Diesel', 'LPG', 'Unleaded'],
	carTankCapacity: 5,
	vanTankCapacity: 8,
	HGVTankCapacity: 15,
	emptyTank: 0,
	divisor: 4,
	currentSecond: 0,
	runningTotals: {
		totalLitresDispensed: 0,
		totalVehiclesFuelled: 0,
		totalVehiclesThatLeft: 0,
		transactions: [],
	},
	queue: [],
	vehicle: {
		vehicleType: '',
		tankCapacity: 0,
		fuelGauge: 0,
		fuelType: '',
	},
};
