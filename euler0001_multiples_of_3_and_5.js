function multiplesOf3and5(number) {
  var x3 = Math.floor((number-1)/3);
  var x5 = Math.floor((number-1)/5);
  var x15 = Math.floor((number-1)/15);
  return 3*x3*(x3+1)/2 + 5*x5*(x5+1)/2 - 15*x15*(x15+1)/2;
}
