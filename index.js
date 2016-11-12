'use strict'

const prime = require('./prime')

// Input. Should be a natural number.
let nn = process.argv[2]

if (isNaN(parseInt(nn)) || parseInt(nn) < 0) {
  console.error('Expecting a natural number')
  process.exit()
}

console.log(`Does ${nn} have the Tortoise property? Let's find out...`)

if (nn % 2) {
  console.error(`${nn} is odd, so it cannot be the difference between two odd primes.`)
  process.exit()
}

// TODO: Find the closest prime, p1, where p1 > nn
// TODO: Find next prime, p2, where p2 <= (p1 - nn)