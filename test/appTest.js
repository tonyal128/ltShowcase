const assert = require('chai').assert;
const expect = require('chai').expect;
const itParam = require('mocha-param');
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
        itParam('argument should be a number',[1], function(value){
            expect(value).to.be.a('number');
        });
        itParam('argument should be greater than 0',[1], function(value){
            expect(value).to.be.greaterThan(0);
        });
    });

    describe('isJson', function(){
        it('isJson should return boolean of false if not passed JSON', function(){
            assert.equal(isJson('not json'), false);
        });
        it('isJson should be a function', function(){
            assert.isFunction(isJson);
        })
    });

    describe('getPhotos', function(){
        itParam('argument should be a number',[1], function(value){
            expect(value).to.be.a('number');
        });
        itParam('argument should be greater than 0',[1], function(value){
            expect(value).to.be.greaterThan(0);
        });
    });
});