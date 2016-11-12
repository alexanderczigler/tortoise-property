'use strict'

const prime = require('./prime')

// Input. Should be a natural number.
let nn = process.argv[2]

if (isNaN(parseInt(nn)) || parseInt(nn) < 0) {
  console.error('Expecting a natural number')
  process.exit()
}

// Make nn a number.
nn = parseInt(nn)

console.log(`Does ${nn} have the Tortoise property? Let's find out...`)
console.log()

if (nn % 2) {
  console.error(`${nn} is odd, so it cannot be the difference between two odd primes.`)
  process.exit()
}

let insanity = 0
let p1 = 0
let p2 = 0

// I am taking a Lovecraftian approach to this.
while (insanity < 10000) {
  insanity++
  p1 = nn + insanity

  // Figure out the closest prime p1 above nn (p1 > nn)
  if (prime.is(p1)) {
    p2 = 0
    let i = 0

    while (p2 < nn) {
      p2 = p1 - nn + i

      if (prime.is(p2) && p1 - p2 === nn) {
        console.log(`Yes, ${nn} is the difference between primes ${p2} and ${p1}`)
      }

      i++
    }
    
  }
}
