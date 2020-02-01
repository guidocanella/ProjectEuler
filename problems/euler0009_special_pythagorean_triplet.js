function specialPythagoreanTriplet(n) {
 for (let c = Math.ceil(n*(Math.SQRT2-1)); c<n/2; c++) {
     let delta = Math.pow(c,2)-Math.pow(n,2)+2*c*n;
     if (delta>=0) {
         let delta_sqrt = Math.sqrt(delta);
         if (Number.isInteger(delta_sqrt)) {
             let a = (n-c-delta_sqrt)/2;
             let b = (n-c+delta_sqrt)/2;
             return a*b*c;
         }
     }
 }
}

function main(n) { return specialPythagoreanTriplet(n);}
