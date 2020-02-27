function spiralDiagonals(n) {
  if (n%2==0) return false;
  let sum=1;
  for (let i=3; i<=n; i+=2) sum += Math.pow(i-2,2)*4 + (i-1)*10;
  return sum;
}

function main(n) { return spiralDiagonals(n);}