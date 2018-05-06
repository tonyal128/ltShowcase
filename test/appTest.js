const assert = require('chai').assert;
const isNumber = require('../app.js').isNumber;
const isJson = require('../app.js').isJson;


describe('App', function(){
    describe('isNumber', function(){
        it('isNumber should return boolean of true if passed a number', function(){
            assert.equal(isNumber(1), true);
        });
        it('isNumber should return boolean of false if passed a NaN', function(){
            assert.equal(isNumber("string"), false);
        });
        it('isNumber should be a function', function(){
            assert.isFunction(isNumber);
        })
    });
    describe('isJson', function(){
        it('isJson should return boolean of true', function(){
            assert.equal(isJson(true), true);
        });
        it('isJson should be a function', function(){
            assert.isFunction(isJson);
        })
    });
});