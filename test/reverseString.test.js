const reStr = require('../reverseString');

test('reverse a string', () => {
    expect(reStr('Abyn')).toBe('nybA');
})

test('reverse a string', () => {
    expect(reStr('Tenetabyn')).toBe('nybateneT');
})