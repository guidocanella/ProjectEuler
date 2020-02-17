function sumOfNonAbundantNumbers(n) {
  let ab_sum = [], ab_arr = [], m=parseInt(n);
  for (let i=12; i<=m-12; i++) {
    if (properDivisorsSum(i)>i) {
      ab_arr.push(i);
      for(let j=0; j<ab_arr.length; j++) {
        if (ab_arr[j]+i<=m) ab_sum[ab_arr[j]+i] = ab_arr[j]+i;
      }
    }
  }
  return m*(1+m)/2 - ab_sum.reduce((s,c)=> s + c);
}

function main(n) { return sumOfNonAbundantNumbers(n);}