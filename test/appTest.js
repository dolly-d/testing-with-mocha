const assert = require('chai').assert
const sayHello = require('../app').sayHello

describe('App', function(){
it('app should return Your first test!', function(){
    let result = sayHello()
    assert.equal(result, 'hello')
})
})