// class Person {
//   constructor(name, role, destination) {
//     this.name = name
//     this.role = role
//     this.destination = destination
//   }
// }

class Person {
  constructor(name, age, destination, role) {
    this.name = name
    this.age = age
    this.destination = destination
    this.role = role
  }
  boardPlane(destination) {
    if (destination === 'Boston') {
      throw new ItsTooColdError('It is too cold in Boston!')
    } else {
      return `Hi I am boarding to go to ${destination}`
    }
  }
}

module.exports = Person
