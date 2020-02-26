function cycle_length(n) {
	let rem = [], r = 10%n;
	while (r && rem.indexOf(r)==-1) {
		rem.push(r);
		r = (r*10)%n;
	}
	if (r) return rem.length-rem.indexOf(r);
	else return 0;
}

function reciprocalCycles(n) {
	let cmax=0, nmax=0;
	for (let i=n; i-1>cmax; i--) {
		let c = cycle_length(i);
		if (c>cmax) {
			cmax = c;
			nmax = i;
		}
	}
	return nmax;
}

function main(n) { return reciprocalCycles(n);}