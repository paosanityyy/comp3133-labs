const assert = require('assert');
const calculator = require('../app/calculator');

describe('Calculator Tests', function() {
    describe('Addition', function() {
        it('add(5, 2) should return 7 (PASS)', function() {
            assert.equal(calculator.add(5, 2), 7);
        });

        it('add(5, 2) should not return 8 (FAIL)', function() {
            assert.equal(calculator.add(5, 2), 8);
        });
    });

    describe('Subtraction', function() {
        it('sub(5, 2) should return 3 (PASS)', function() {
            assert.equal(calculator.sub(5, 2), 3);
        });

        it('sub(5, 2) should not return 5 (FAIL)', function() {
            assert.equal(calculator.sub(5, 2), 5);
        });
    });

    describe('Multiplication', function() {
        it('mul(5, 2) should return 10 (PASS)', function() {
            assert.equal(calculator.mul(5, 2), 10);
        });

        it('mul(5, 2) should not return 12 (FAIL)', function() {
            assert.equal(calculator.mul(5, 2), 12);
        });
    });

    describe('Division', function() {
        it('div(10, 2) should return 5 (PASS)', function() {
            assert.equal(calculator.div(10, 2), 5);
        });

        it('div(10, 2) should not return 2 (FAIL)', function() {
            assert.equal(calculator.div(10, 2), 2);
        });
    });
});
