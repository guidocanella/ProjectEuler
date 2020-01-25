function largestPrimeFactor(number) {
  return factorization(number).pop();
}

function main(n) { return largestPrimeFactor(n) }