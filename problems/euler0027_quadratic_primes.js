function quadraticPrimes(range) {
	let primes = [2,3], prime_index=[], nmax=0, pmax=0, j;
	prime_index[0]=false;
	prime_index[1]=true;
	prime_index[2]=true;
	prime_index[3]=true;
	for (let curr=5; curr<=range; curr+=2) {
		for (j=1; Math.pow(primes[j],2) <= curr && curr % primes[j] != 0; j++);
		if (Math.pow(primes[j],2) > curr) {
			primes.push(curr);
			prime_index[curr]=true;
		}
	}
  function is_prime(p){
	  //console.log(p);
	  if (p<=range) {
		  if (typeof prime_index[p] !== 'undefined') return true;
		  else return false;
	  }
	  else {
		  for (let i=0; primes[i]<=Math.sqrt(p); i++) {
			  if (p%primes[i]==0) return false;
		  }
		  return true;
	  }
  }
  for (let b=1; primes[b]<=range; b++) {
	  for (let a=1; a<range; a++) {
		  let n=0;
		  while(is_prime(Math.abs(n*n+a*n+primes[b]))) n++;
		  if (n-1>nmax) {
			  nmax = n-1;
			  pmax = a*primes[b];
			  n--;
			  //console.log('nmax: '+nmax+', a:'+a+', b:'+primes[b]+'; res:'+(n*n+a*n+primes[b]));
		  }
		  n=0;
		  while(is_prime(Math.abs(n*n-a*n+primes[b]))) n++;
		  if (n-1>nmax) {
			  nmax = n-1;
			  pmax = -a*primes[b];
			  n--;
			  //console.log('nmax: '+nmax+', a:'+(-a)+', b:'+primes[b]+'; res:'+(n*n-a*n+primes[b]));
		  }
		  
		  n=0;
		  while(is_prime(Math.abs(n*n+a*n-primes[b]))) n++;
		  if (n-1>nmax) {
			  nmax = n-1;
			  pmax = -a*primes[b];
			  n--;
			  //console.log('nmax: '+nmax+', a:'+a+', b:'+(-primes[b])+'; res:'+(n*n+a*n-primes[b]));
		  }
		  n=0;
		  while(is_prime(Math.abs(n*n-a*n-primes[b]))) n++;
		  if (n-1>nmax) {
			  nmax = n-1;
			  pmax = a*primes[b];
			  n--;
			  //console.log('nmax: '+nmax+', a:'+(-a)+', b:'+(-primes[b])+'; res:'+(n*n-a*n-primes[b]));
		  }
		  //console.log('a:'+a+', b:'+primes[b]+', nmax:'+nmax);
	  }
  }
  //console.log(range+':'+pmax);
  return pmax;
}

function main(n) { return quadraticPrimes(n);}