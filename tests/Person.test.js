const Person = require('../class/Person')

// describe('Person Class', () => {
//   const testPerson = new Person('Jin', 'Pilot', 'Boston')

//   test('has a flight #', () => {
//     expect(testPerson.name).toBe('Jin')
//   })
//   test('has a role', () => {
//     expect(testPerson.role).toBe('Pilot')
//   })
//   test('has a destination', () => {
//     expect(testPerson.destination).toBe('Boston')
//   })
// })

describe('Person class', () => {
  const testPerson = new Person('Jin', 20, 'New York', 'Person')

  test('person can have a name', () => {
    expect(testPerson.name).toBe('Jin')
  })

  test('person can have an age', () => {
    expect(testPerson.age).toBe(20)
  })

  test('person can have a destination', () => {
    expect(testPerson.destination).toBe('New York')
  })

  test('person has a role', () => {
    expect(testPerson.role).toBe('Person')
  })

  test('person can board plane', () => {
    const testPerson2 = new Person('Jin', 20, 'Boston', 'Person')

    expect(() => {
      testPerson2.boardPlane(testPerson2.destination)
    }).toThrow()
  })
})
