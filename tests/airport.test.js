const Airport = require('../class/Airport')
const Person = require('../class/Person')
const Plane = require('../class/Plane')
const Bag = require('../class/Bag')

describe('Airport Class', () => {
  const testAirport = new Airport('JFK')
  const testPlane = new Plane('B500')
  const testBag = new Bag('Gucci', 'Jin')
  const testPerson = new Person('Jin')

  test('has a name', () => {
    expect(testAirport.name).toBe('JFK')
  })
  test('has a plane', () => {
    testAirport.addPlane(testPlane)
    expect(testAirport.planes[0].flightNumber).toBe('B500')
  })
  test('has a bag', () => {
    testAirport.addBags(testBag)
    expect(testAirport.bags[0].passenger).toBe('Jin')
  })
  test('has a person', () => {
    testAirport.addPeople(testPerson)
    expect(testAirport.people[0].name).toBe('Jin')
  })
})
