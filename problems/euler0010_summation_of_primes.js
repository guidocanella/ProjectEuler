function primeSummation(n) {
	return primesBelowN(n).reduce((tot,curr)=>{return tot+curr;});
}

function main(n) { return primeSummation(n);}
