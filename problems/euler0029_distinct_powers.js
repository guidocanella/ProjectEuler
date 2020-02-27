function distinctPowers(n) {
  let p=[], m=[], c=0;
  for (let a=2;a<=n;a++) {
	  m[a]=[];
	  m[a][1]=[a];
	  for (let b=2;b<=n;b++) {
		  m[a][b] = hugeMultiplicand(m[a][b-1], a);
		  if (typeof p[m[a][b].toString()] === "undefined") p[m[a][b].toString()] = ++c;
	  }
  }
  return c;
}

function main(n) { return distinctPowers(n);}