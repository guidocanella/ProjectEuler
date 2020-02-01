function factorization (n) {
	let f_test = 2;
	let factors = [];
	while (f_test*f_test <= n) {
		if (n % f_test == 0) {
			factors.push(f_test);
			n = n/f_test;
		}
		else f_test++;
	}
	factors.push(n);
  return factors;
}

function primesBelowN (n) {
	let primes = [2,3,5], curr, j;
	for (curr=7; curr<n; curr+=2) {
		for (j=1; Math.pow(primes[j],2) <= curr && curr % primes[j]; j++) {}
		if (Math.pow(primes[j],2) > curr) primes.push(curr);
	}
	return primes;
}