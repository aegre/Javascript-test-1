const wordMaker = require('./index')


describe('wordMaker with hello', () => {

  test('Hello test 1', () => {
    const exptectedResult = 0

    const result = wordMaker('hello', 'hheheleell')

    expect(result).toEqual(exptectedResult)
  }),

  test('Hello test 2', () => {
    const exptectedResult = 1

    const result = wordMaker('hello', 'hheheleeelolhhell')

    expect(result).toEqual(exptectedResult)
  }),

  test('Hello test 3', () => {
    const expectedResult = 3

    const result = wordMaker('hello', 'ohhelloolllleeelellleehhehlleheeelll')

    expect(result).toEqual(expectedResult)
  })

})

describe('wordMaker with world', () => {

  test('World test 1', () => {
    const exptectedResult = 0

    const result = wordMaker('world', 'woooorrrdd')

    expect(result).toEqual(exptectedResult)
  }),

  test('World test 2', () => {
    const exptectedResult = 1

    const result = wordMaker('world', 'wooloorrrdd')

    expect(result).toEqual(exptectedResult)

  }),

  test('World test 3', () => {
    const exptectedResult = 3

    const result = wordMaker('world', 'lwooolorrrdd l')

    expect(result).toEqual(exptectedResult)
  })
})
