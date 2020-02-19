var digits=[0,1,2,3,4,5,6,7,8,9];
var fact=[];
fact[0]=1;
for (let i=1; i<=digits.length; i++) fact[i]=i*fact[i-1];

function lexicographicPermutationsRecursive (digits, n) {
  if (digits.length==1) return digits[0];
  let lm=fact[digits.length-1];
  if (n<=lm) return ''+digits.shift()+lexicographicPermutationsRecursive(digits,n);
  let rem = digits.splice(Math.ceil(n/lm)-1, 1);
  return ''+rem[0]+lexicographicPermutationsRecursive(digits, n%lm!=0?n%lm:lm);
}

function lexicographicPermutations(n) {
	return lexicographicPermutationsRecursive(digits, 1+n);
}

function main(n) { return lexicographicPermutations(n);}