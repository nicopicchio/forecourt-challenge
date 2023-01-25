import Transaction from './Transaction.js';

export default class Pump {
  constructor(pumpNumber) {
    this.pumpNumber = pumpNumber;
    this.isInUse = false;
    this.occupiedAt = 0;
    this.secondsToRefill = 0;
    this.currentTransactionFuel = "";
    this.currentTransactionLitres = 0;
    this.pumpSpeed = 1.5;
  }

  isPumpFree() {
    return !this.isInUse;
  }

  startRefuel(vehicle, currentSecond) {
    this.isInUse = true;
    this.currentTransactionFuel = vehicle.fuelType;
    
    const fuelNeeded = Math.floor(vehicle.tankCapacity - vehicle.fuelGauge);
    const secondsToFull = Math.ceil(fuelNeeded / 1.5);

    this.occupiedAt = currentSecond;
    this.secondsToRefill = secondsToFull;
    this.currentTransactionLitres = fuelNeeded;
  }

  endRefuel() {
    this.isInUse = false;
    return new Transaction(this.currentTransactionFuel, this.currentTransactionLitres);
  }
}
