function solution(N) {
  
  const digits = N.toString().split('');
  
  const sum = digits.map(Number).reduce((acc, curr) => acc + curr, 0);

  return sum;
}