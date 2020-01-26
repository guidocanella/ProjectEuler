function largestPalindromeProduct(n) {
  for (let p = Math.pow(10,2*n)-1; p>0; p--) {
    let p1 = p;
    if (p.toString() == p1.toString().split('').reverse().join('')) {
      for (let f1=Math.pow(10, n)-1; f1 > p/Math.pow(10,n); f1--) {
        for (let f2=f1; f2 > p/Math.pow(10,n); f2--) {
          if (f1*f2 == p) return p;
        }
      }
    }
  }
}

function main(n) { return largestPalindromeProduct(n);}