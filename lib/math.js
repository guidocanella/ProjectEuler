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

/**
 * 
 * @param array m_arr
 * @param integer multiplier
 * @returns array
 */
function hugeMultiplicand(m_arr, multiplier) {
  let r=0;
  for (let i=0; i<m_arr.length; i++) {
    m_arr[i] = m_arr[i]*multiplier+r;
    r=Math.floor(m_arr[i]/10);
    m_arr[i]%=10;
  }
  while (r) {
    m_arr.push(r%10);
    r=Math.floor(r/10);
  }
  return m_arr;
}

/**
 * I.e. 12 => 1+2+3+4+6=16
 * @param integer n
 * @returns integer
 */
function properDivisorsSum(n) {
	let sum = 1, i;
	for (i=2; i<=Math.sqrt(n); i++) {
	  if (n%i==0) sum+=i+n/i;
	}
	if (i-1 == Math.sqrt(n)) sum-=i-1;
	return sum;
}