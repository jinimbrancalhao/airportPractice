class Bag {
  constructor(passenger) {
    this.passenger = passenger
    this.checkIn = 0
    this.carryOn = 0
  }
  addBag(weight) {
    if (weight > 25) {
      this.checkIn++
    } else {
      this.carryOn++
    }
  }
}

module.exports = Bag
