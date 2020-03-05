function digitnPowers(n) {
  let p=[], sum=0;
  p[0]=0;
  p[1]=1;
  for (let i=2; i<10; i++) p[i]=Math.pow(i,n);
  for (let t=2; t<=p[9]*n; t++) {
    if (Array.from(t.toString()).reduce((s,v)=>s+p[v],0)==t) sum+=t;
  }
  return sum;
}

function main(n) { return digitnPowers(n);}