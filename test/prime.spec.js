'use strict'

const chai = require('chai')
const expect = chai.expect
chai.use(require('sinon-chai'))

const prime = require('../prime')

describe('primes are primes', () => {
  it('1', () => {
    expect(prime.is(1)).to.eql(true)
  })

  it('2', () => {
    expect(prime.is(2)).to.eql(true)
  })

  it('3', () => {
    expect(prime.is(3)).to.eql(true)
  })

  it('5', () => {
    expect(prime.is(5)).to.eql(true)
  })

  it('11', () => {
    expect(prime.is(11)).to.eql(true)
  })

  it('23', () => {
    expect(prime.is(23)).to.eql(true)
  })

  it('97', () => {
    expect(prime.is(97)).to.eql(true)
  })

  it('2707', () => {
    expect(prime.is(2707)).to.eql(true)
  })
})

describe('non-primes are not primes', () => {
  it('4', () => {
    expect(prime.is(4)).to.eql(false)
  })

  it('8', () => {
    expect(prime.is(8)).to.eql(false)
  })

  it('9', () => {
    expect(prime.is(9)).to.eql(false)
  })

  it('21', () => {
    expect(prime.is(21)).to.eql(false)
  })

  it('27', () => {
    expect(prime.is(27)).to.eql(false)
  })

  it('35', () => {
    expect(prime.is(35)).to.eql(false)
  })

  it('81', () => {
    expect(prime.is(81)).to.eql(false)
  })
})