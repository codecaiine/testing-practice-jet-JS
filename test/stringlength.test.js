const result = require('../stringlength.js');

test('count the length of string', () => {
    expect(result('hello')).toBeGreaterThanOrEqual(1)
})

test('length of string greater than or equal to 1 and less than or equal to 10', () => {
    expect(result('hello')).toBeLessThanOrEqual(10)
})