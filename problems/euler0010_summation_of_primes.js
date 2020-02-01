function primeSummation(n) {
	let primes = [2,3,5], curr, j, sum=10;
	for (curr=7; curr<n; curr+=2) {
		for (j=1; Math.pow(primes[j],2) <= curr && curr % primes[j]; j++) {}
		if (Math.pow(primes[j],2) > curr) {
			primes.push(curr);
			sum += curr;
		}
	}
	return sum;
}

function main(n) { return primeSummation(n);}
