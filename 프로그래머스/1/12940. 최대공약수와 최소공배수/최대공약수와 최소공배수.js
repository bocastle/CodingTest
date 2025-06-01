function solution(a, b) {
  
  const gcd = (x, y) => {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };


  const lcm = (a * b) / gcd(a, b);

  return [gcd(a, b), lcm];
}