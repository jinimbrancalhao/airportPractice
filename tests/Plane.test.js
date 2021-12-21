const Plane = require('../class/Plane')
const Person = require('../class/Person')

describe('Plane Class', () => {
  const testPlane = new Plane('B500')

  const passenger1 = new Person('Jin', 'Passenger')
  const pilot1 = new Person('John', 'Pilot')
  const crew1 = new Person('James', 'Crew')

  test('has a flight #', () => {
    expect(testPlane.flightNumber).toBe('B500')
  })

  test('can have Passengers', () => {
    testPlane.addPerson(passenger1)

    expect(Array.isArray(testPlane.passengers)).toBeTruthy()
    expect(testPlane.passengers.length).toBe(1)
    expect(testPlane.passengers[0].name).toBe('Jin')
  })
  test('can have Pilots', () => {
    testPlane.addPerson(pilot1)

    expect(Array.isArray(testPlane.pilots)).toBeTruthy()
    expect(testPlane.pilots.length).toBe(1)
    expect(testPlane.pilots[0].name).toBe('John')
  })
  test('can have Crew', () => {
    testPlane.addPerson(crew1)

    expect(Array.isArray(testPlane.crew)).toBeTruthy()
    expect(testPlane.crew.length).toBe(1)
    expect(testPlane.crew[0].name).toBe('James')
  })
})
