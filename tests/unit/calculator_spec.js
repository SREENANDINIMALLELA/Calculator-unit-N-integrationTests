var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });


  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });
  it('it has to add', function(){
    calculator.previousTotal=1
    calculator.add(4)
    actual= calculator.runningTotal
    assert.equal(actual,5)
  });
  it('it has to subs', function(){
    calculator.previousTotal=4
    calculator.subtract(7)
    actual= calculator.runningTotal
    assert.equal(actual,-3)
  });
  it('it has to multiply', function(){
    calculator.previousTotal=3
    calculator.multiply(5)
    actual= calculator.runningTotal
    assert.equal(actual,15)
  })
  it('it has to divide', function(){
    calculator.previousTotal= 21
    calculator.divide(7)
    actual= calculator.runningTotal
    assert.equal(actual,3)
  })
  it('it has to get next number click', function(){
    calculator.previousTotal= 1
    calculator.add(7)
    calculator.runningTotal
    calculator.numberClick(7)
    actual= calculator.runningTotal
    assert.equal(actual,7)
  })
  it('it has get next operator', function(){
    calculator.previousTotal= 1
    calculator.add(7)
    calculator.runningTotal
    calculator.operatorClick('+')
    actual= calculator.previousOperator
    assert.equal(actual,"+")
  })
  it('it has to clear after click', function(){
    calculator.previousTotal= 1
    calculator.add(7)
    calculator.clearClick()
    actual= calculator.runningTotal
    assert.equal(actual,0)
  })



});
