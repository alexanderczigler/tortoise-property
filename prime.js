'use strict'

module.exports = {
  is: n => {
    if (n === 1) {
      return true
    }

    if (n < 1) {
      return false
    }

    let modN = n

    while (modN > 1) {
      modN--

      if (modN === 1) {
        return true
      }

      if (modN !== 1 && n % modN === 0) {
        return false
      }
    }
  }
}