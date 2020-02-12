function hugeFactorial(n) {
  if (n==1) return [1];
  return hugeMultiplicand(hugeFactorial(n-1),n); 
}

function sumFactorialDigits(n) {
	return hugeFactorial(n).reduce((sum,term)=>sum+=term);
}

function main(n) { return sumFactorialDigits(n);}