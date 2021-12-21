class Plane {
  constructor(flightNumber) {
    this.flightNumber = flightNumber
    this.passengers = []
    this.pilots = []
    this.crew = []
  }
  addPerson(person) {
    if (person.role === 'Passenger') {
      this.passengers.push(person)
    } else if (person.role === 'Pilot') {
      this.pilots.push(person)
    } else {
      this.crew.push(person)
    }
  }
}

module.exports = Plane
