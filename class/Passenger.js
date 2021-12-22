const Person = require('./Person')

class Passenger extends Person {
  constructor(name, age, destination, seatNumber) {
    super(name, age, destination)
    this.seatNumber = seatNumber
    this.roundTrip = false
    this.role = 'Passenger'
  }
}

module.exports = Passenger
