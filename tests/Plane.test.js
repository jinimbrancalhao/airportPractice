const Plane = require('../class/Plane')
const Passenger = require('../class/passenger')
const CrewMember = require('../class/CrewMember')

describe('Plane Class', () => {
  const testPlane = new Plane('B500')

  const testPassenger = new Passenger('Jin', 20, 'New York', '33b')
  const testCrewMember = new CrewMember('James', 25, 'New York', '123')

  test('has a flight #', () => {
    expect(testPlane.flightNumber).toBe('B500')
  })

  test('can have Passengers', () => {
    testPlane.addPassenger(testPassenger)

    expect(Array.isArray(testPlane.passengers)).toBeTruthy()
    expect(testPlane.passengers.length).toBe(1)
    expect(testPlane.passengers[0].name).toBe('Jin')
  })

  test('can have Crew', () => {
    testPlane.addCrewMember(testCrewMember)

    expect(Array.isArray(testPlane.crew)).toBeTruthy()
    expect(testPlane.crew.length).toBe(1)
    expect(testPlane.crew[0].name).toBe('James')
  })
})
