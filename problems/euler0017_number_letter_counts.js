var l=[0, 3,3,5,4,4, 3,5,5,4,3, 6,6,8,8,7, 7,9,8,8,6];
l[30]=6;
l[40]=5;
l[50]=5;
l[60]=5;
l[70]=7;
l[80]=6;
l[90]=6;
l[100]=10;
l['hundred']=7;
l[1000]=11;
l['thousand']=8;

function len(n) {
	if (typeof l[n] === 'undefined') {
		let len = 0;
		if (n>999999) return false;
		if (n>999) len += len(Math.floor(n/1000)) + l['thousand'];
		let n1000 = n%1000;
		if (n1000>99) {
			len += l[Math.floor(n1000/100)] + l['hundred'];
			if (n1000%100) len += 3;
		}
		let n100 = n%100;
		if (n100>19) len += l[n100-n100%10] + l[n100%10];
		else len += l[n100];
		l[n] = len;
	}
	return l[n];
}

function numberLetterCounts(limit) {
	let c=0;
	for (let i=1; i<=limit; i++) c+=len(i);
	return c;
}

function main(n) { return numberLetterCounts(n);}