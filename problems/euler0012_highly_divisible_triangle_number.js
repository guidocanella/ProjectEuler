function divisibleTriangleNumber(n) {
  let t=1, d=0, j;
  for (let i=2; d<=n; i++) {
    d=0;
    t=t+i;
    for (j=1; j<=Math.sqrt(t); j++) {
      if (t%j==0) d++;
    }
    d*=2;
    if (Math.pow(j,2)==t) d--;
  }
  return t;
}
function main(n) { return divisibleTriangleNumber(n);}