export default class Transaction {
  constructor(fuelType, litresDispensed) {
    this.dateTime = new Date().toLocaleString('en-GB');
    this.fuelType = fuelType;
    this.litresDispensed = litresDispensed;
  }
}
