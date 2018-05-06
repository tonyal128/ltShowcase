const assert = require('chai').assert;
const isNumber = require('../app.js').isNumber;
const isJson = require('../app.js').isJson;


describe('App', function(){
    describe('isNumber', function(){
        it('isNumber should return boolean of true', function(){
            assert.equal(isNumber(true), true);
        });
        it('isNumber should be a function', function(){
            assert.isFunction(isNumber);
        })
    });
});