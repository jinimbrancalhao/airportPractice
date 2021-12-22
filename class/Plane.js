class Plane {
  constructor(flightNumber) {
    this.flightNumber = flightNumber
    this.passengers = []
    this.crew = []
  }
  addPassenger(person) {
    this.passengers.push(person)
  }

  addCrewMember(person) {
    this.crew.push(person)
  }
}

module.exports = Plane
