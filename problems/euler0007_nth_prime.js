function nthPrime (n) {
	let primes = [2], curr = 3;
	for (let i=1; i<n; i++){
		let found = false;
		for (; !found; curr++) {
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
	return curr-1;
}

function main(n) { return nthPrime(n);}