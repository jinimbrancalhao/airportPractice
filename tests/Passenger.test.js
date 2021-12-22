const Passenger = require('../class/Passenger')

describe('Passenger class', () => {
  const testPassenger = new Passenger('Jin', 20, 'New York', '33b')

  test('passenger has a name', () => {
    expect(testPassenger.name).toBe('Jin')
  })
  test('passenger has an age', () => {
    expect(testPassenger.age).toBe(20)
  })
  test('passenger has a destination', () => {
    expect(testPassenger.destination).toBe('New York')
  })
  test('passenger has a seat', () => {
    expect(testPassenger.seatNumber).toBe('33b')
  })
})
