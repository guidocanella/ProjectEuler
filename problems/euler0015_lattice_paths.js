function latticePaths(gridSize) {
  let i, fact=1, fact_2=1;
  for (i=1; i<=gridSize; fact*=i, i++);
  for (;i<=2*gridSize;fact_2*=i, i++);
  return fact_2/fact;
}

function main(n) { return latticePaths(n);}