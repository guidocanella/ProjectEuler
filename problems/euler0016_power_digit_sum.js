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
}

function powerDigitSum(exponent) {
  let a = [2];
  for (let e=2; e<=exponent; e++) hugeMultiplicand(a,2);
  return a.reduce((sum,term)=>sum+=term);
}

function main(n) { return powerDigitSum(n);}