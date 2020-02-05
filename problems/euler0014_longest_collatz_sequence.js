function longestCollatzSequence(limit) {
  let max=0, n_max=0, collatzArray=[];
  collatzArray[1]=1;
  function collatzLength(n) {
    if (typeof collatzArray[n] === 'undefined') {
      if (n%2) collatzArray[n] = collatzLength(n*3+1)+1;
      else collatzArray[n] = collatzLength(n/2)+1;
    }
    return collatzArray[n];
  }
  for (let n=limit; n>1; n--) {
    let l = collatzLength(n);
    if (l>max) {
      max = l;
      n_max = n;
    }
  }
  return n_max;
}

function main(n) { return longestCollatzSequence(n);}