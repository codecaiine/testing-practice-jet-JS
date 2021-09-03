const Calculator = require('../calculator.js');

describe('calculator unit test', () => {
    describe('add', () => {
        test('add 3 and 2 should be greater than 4', () => {
            const number = new Calculator(3, 2);
            expect(number.add()).toBeGreaterThan(4);
        })
        test('add 3 and 2 should be greater than or equal 4.5', () => {
            const number = new Calculator(3, 2);
            expect(number.add()).toBeGreaterThanOrEqual(4.5);
        })
        test('add 3 and 2 should be less than 6', () => {
            const number = new Calculator(3, 2);
            expect(number.add()).toBeLessThan(6);
        })
        test('add 3 and 2 should be 5', () => {
            const number = new Calculator(3, 2);
            expect(number.add()).toBe(5);
        })
    })

    describe('subtract', () => {
        test('subtract 2 from 3', () => {
            const number = new Calculator(3, 2);
            expect(number.subtract()).toBe(1);
        })
        test('subtract 3 from 2', () => {
            const number = new Calculator(2, 3);
            expect(number.subtract()).toBe(-1);
        })
        test('subtract 5 from 10', () => {
            const number = new Calculator(10, 5);
            expect(number.subtract()).toBe(5);
        })
    })

    describe('divide', () => {
        test('divide 3 by 2', () => {
            const number = new Calculator(3, 2);
            expect(number.divide()).toBeCloseTo(1.5);
        })
        test('divide 2 by 3', () => {
            const number = new Calculator(2, 3);
            expect(number.divide()).toBeCloseTo(0.6666666);
        })
        test('divide 10 by 5', () => {
            const number = new Calculator(10, 5);
            expect(number.divide()).toBe(2);
        })
    })

    describe('multiply', () => {
        test('multiply 3 by 2', () => {
            const number = new Calculator(3, 2);
            expect(number.multiply()).toBe(6);
        })
        test('multiply 2 by 3', () => {
            const number = new Calculator(2, 3);
            expect(number.multiply()).toBeGreaterThan(5.5);
        })
        test('multiply 10 by 5', () => {
            const number = new Calculator(10, 5);
            expect(number.multiply()).toBe(50);
        })
    })
})