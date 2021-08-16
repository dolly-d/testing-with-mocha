const assert = require('chai').assert
// const goodJob = require('../app').goodJob
// const addNumber =  require('../app').addNumber
const app = require('../app')

describe('App', function(){
    it('goodJob should return Girl you doing a job', function(){
    let result = app.goodJob()
    assert.equal(result, 'Girl you doing a good job!')
    })

    it('goodJob should return type string', function(){
        let result = app.goodJob()
        //setting function to variable
        assert.typeOf(result, 'string')
        //typeOf checks for data type
    })

    it('addNumber should be above 5', function(){
        let result = app.addNumber(10,15)
        assert.isAbove(result,5)
    })
    it('addNumber should return type integer', function(){
        let result = app.addNumber(10,15)
        assert.typeOf(result, 'string')
    })

})