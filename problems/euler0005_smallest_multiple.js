/**
 * Prime factorization of the smallest positive number that is evenly divisible by all of the numbers from 1 to n
 * @param n
 * @returns array
 */
function smallestMultFactors(n) {
	if (n==2) return [2];
	let prev_factors = smallestMultFactors(n-1);
	let n_factors = factorization(n);
	let new_factors = [];
	for (let i=0; i<n_factors.length; i++) {
		let pos = prev_factors.indexOf(n_factors[i]);
		if (pos != -1)	prev_factors.splice(pos, 1);
		new_factors.push(n_factors[i]);
	}
	return new_factors.concat(prev_factors);
}

/**
 * The smallest positive number that is evenly divisible by all of the numbers from 1 to n
 * @param n integer
 * @returns integer
 */
function smallestMult(n) {
	let factors = smallestMultFactors(n);
	return factors.reduce((a,b)=>a*b);
}

function main(n) { return smallestMult(n);}