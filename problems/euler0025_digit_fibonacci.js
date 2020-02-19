function digitFibonacci(n) {
  let f_prev=[1], f_curr=[1], i=2;
  while(f_curr.length<n) {
    let f_new = hugeAddition(f_prev,f_curr);
    f_prev=f_curr;
    f_curr=f_new;
    i++;
  }
  return i;
}

function main(n) { return digitFibonacci(n);}