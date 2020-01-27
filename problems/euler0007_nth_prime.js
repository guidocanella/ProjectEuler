function nthPrime (n) {
	let primes = [2];
	let curr_prime = 2;
	for (let i=1; i<n; i++){
		while(1) {
			curr_prime++;
			let found = true;
			for (let j=0; Math.pow(primes[j],2) <= curr_prime; j++) {
				if (curr_prime % primes[j] == 0) {
					found = false;
					break;
				}
			}
			if (found) {
				primes.push(curr_prime);
				break;
			}
		}
	}
	return curr_prime;
}

function main(n) { return nthPrime(n);}