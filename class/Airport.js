class Airport {
  constructor(name) {
    this.name = name
    this.planes = []
    this.bags = []
    this.people = []
  }
  addPlane(plane) {
    this.planes.push(plane)
  }
  addBags(bag) {
    this.bags.push(bag)
  }
  addPeople(person) {
    this.people.push(person)
  }
}

module.exports = Airport
