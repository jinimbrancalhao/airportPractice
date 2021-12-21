const Person = require('../class/Person')

describe('Person Class', () => {
  const testPerson = new Person('Jin', 'Pilot', 'Boston')

  test('has a flight #', () => {
    expect(testPerson.name).toBe('Jin')
  })
  test('has a role', () => {
    expect(testPerson.role).toBe('Pilot')
  })
  test('has a destination', () => {
    expect(testPerson.destination).toBe('Boston')
  })
})
