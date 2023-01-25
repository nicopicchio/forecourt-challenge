import { generateRandomNumber, generateRandomArrayIndex } from './utils.js';

const vehicles = ['Car', 'Van', 'HGV'];
const fuels = ['Diesel', 'LPG', 'Unleaded'];
const carTankCapacity = 10;
const vanTankCapacity = 80;
const HGVTankCapacity = 150;

export default class Vehicle {
	constructor(vehicleType, tankCapacity, fuelLevel, fuelType) {
		this.vehicleType = vehicleType;
		this.tankCapacity = tankCapacity;
		this.fuelGauge = fuelLevel;
		this.fuelType = fuelType;
	}

	static generateRandomVehicle() {
		const type = generateRandomArrayIndex(vehicles);

		let fuelLevel, fuelType;
		switch (type) {
			case 'HGV':
				const findDiesel = fuels.find(fuel => fuel === 'Diesel')
				fuelLevel = generateRandomNumber(0, HGVTankCapacity * 0.25, 1);
				return new Vehicle('HGV', HGVTankCapacity, fuelLevel, findDiesel);
			case 'Van':
				fuelType = generateRandomArrayIndex(fuels.slice(0, 2));
				fuelLevel = generateRandomNumber(0, vanTankCapacity * 0.25, 1);
				return new Vehicle('Van', vanTankCapacity, fuelLevel, fuelType);
			default:
				fuelType = generateRandomArrayIndex(fuels);
				fuelLevel = generateRandomNumber(0, carTankCapacity * 0.25, 1);
				return new Vehicle('Car', carTankCapacity, fuelLevel, fuelType);
		}
	}
}
