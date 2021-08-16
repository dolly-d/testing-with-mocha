const assert = require('chai').assert
const sayHello = require('../app').sayHello

describe('App', function(){
it('sayHello should return hello', function(){
    let result = sayHello()
    assert.equal(result, 'hello')
    })
    it('sayHello should return type string', function(){
        let result = sayHello()
        //setting function to variable
        assert.typeOf(result, 'string')
        //typeOf checks for data type
    })
})