function powerDigitSum(exponent) {
  let a = [2];
  for (let e=2; e<=exponent; e++) hugeMultiplicand(a,2);
  return a.reduce((sum,term)=>sum+=term);
}

function main(n) { return powerDigitSum(n);}