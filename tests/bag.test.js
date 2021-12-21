const Bag = require('../class/Bag')

describe('Bag Class', () => {
  const testBag = new Bag('Gucci', 'Jin')
  console.log(testBag)

  test('has a passenger', () => {
    expect(testBag.passenger).toBe('Jin')
  })
  test('has a brand', () => {
    expect(testBag.brand).toBe('Gucci')
  })

  test('has check in bag', () => {
    testBag.addBag(26)
    expect(testBag.checkIn).toBe(1)
  })
  test('has carry on bag', () => {
    testBag.addBag(20)

    expect(testBag.carryOn).toBe(1)
  })
})
