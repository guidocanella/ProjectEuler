function sumSquareDifference(n) {
  let squareSum = 0;
  for (let i=1; i<=n; i++) squareSum += i*i;
  let sumSquare = Math.pow(n*(n+1)/2, 2);
  return Math.abs(sumSquare-squareSum);
}

function main(n) { return sumSquareDifference(n);}