export function factor(p: number): number[] | number {
  const result = [];
  let leftover = p;
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
  let i = 0;
  while (i < 9) {
    if (leftover % primes[i] === 0) {
      leftover = leftover / primes[i];
      result.push(primes[i]);
      continue;
    } else {
      i++;
    }
  }
  if (result.length === 0) {
    return p;
  }
  return result;
}
console.table(factor(345));
