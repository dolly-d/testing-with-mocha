const assert = require('chai').assert
const expect = require('chai').expect
// const goodJob = require('../app').goodJob
// const addNumber =  require('../app').addNumber
const app = require('../app')

//Instead of having result var in every test block
//set to global variables but keeping in mind this is a small appprobably 
//not a good idea to do with a large app that multiple ppl contribute to
/* Result as global variables */
//goodJob = app.goodJob()
//addNumber = app.addNumber(10,15)

describe('App', function(){
    describe('goodJob()', function(){

        it('goodJob should return Girl you doing a job!', function(){
        let result = app.goodJob()
        assert.equal(result, 'Girl you doing a good job!')
        })
    
        it('goodJob should return type string', function(){
            let result = app.goodJob()
            //setting function to variable
            assert.typeOf(result, 'string')
            //typeOf checks for data type
        })
    })

    describe('addNumber', function(){

        it('addNumber should be above 5', function(){
            let result = app.addNumber(10,15)
            assert.isAbove(result,5)
        })
        it('addNumber should return type integer', function(){
            let result = app.addNumber(10,15)
            assert.typeOf(result, 'number')
        })
    })

    describe('isPalindrome', function(){
        it('isPalindrome should return boolean', function(){
            let result = app.isPalindrome('abba')
            assert.typeOf(result, 'boolean')
        })

        it('isPalindrome returns true or false', function(){
            let result = app.isPalindrome('abba')
            expect(result).to.be.a('boolean')
        })
    })

})