function sumAmicableNum(n) {
  let sum=0, dd=[];
  function d(m) {
    if (typeof dd[m] === 'undefined') dd[m] = properDivisorsSum(m);
    return dd[m];
  }
  for (let j=1; j<n; j++) {
    let d1 = d(j);
    let d2 = d(d1);
    if (j==d2 && j!=d1) sum+=j;
  }
  return sum;
}

function main(n) { return sumAmicableNum(n);}