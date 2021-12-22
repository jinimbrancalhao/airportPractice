const CrewMember = require('../class/CrewMember')

describe('CrewMember class', () => {
  const testCrewMember = new CrewMember('Jin', 20, 'New York', '123')

  test('crew member has a name', () => {
    expect(testCrewMember.name).toBe('Jin')
  })

  test('crew member has an age', () => {
    expect(testCrewMember.age).toBe(20)
  })

  test('crew member has a destination', () => {
    expect(testCrewMember.destination).toBe('New York')
  })

  test('crew member has a work id', () => {
    expect(testCrewMember.workId).toBe('123')
  })

  test('crew member is a crew member', () => {
    expect(testCrewMember.role).toBe('Crew Member')
  })
})
