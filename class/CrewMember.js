const Person = require('./Person')

class CrewMember extends Person {
  constructor(name, age, destination, workId) {
    super(name, age, destination)
    this.workId = workId
    this.role = 'Crew Member'
  }
}

module.exports = CrewMember
