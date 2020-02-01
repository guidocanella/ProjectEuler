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

function primesBelowN_old (n) {
	let primes = [2];
	for (let curr=3; curr<n; ){
		let found = false;
		for (; !found && curr<n; curr++) {
			found = true;
			for (let j=0; Math.pow(primes[j],2) <= curr; j++) {
				if (curr % primes[j] == 0) {
					found = false;
					break;
				}
			}
			if (found) primes.push(curr);
		}
	}
	return primes;
}

function primesBelowN (n) {
	let primes = [2], curr, j;
	for (curr=3; curr<n; curr++) {
		for (j=0; Math.pow(primes[j],2) <= curr && curr % primes[j]; j++) {}
		if (Math.pow(primes[j],2) > curr) primes.push(curr);
	}
	return primes;
}