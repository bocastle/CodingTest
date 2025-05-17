
function solution(d, budget) {
  d.sort((a, b) => a - b); 
  let count = 0;

  for (let cost of d) {
    if (budget >= cost) {
      budget -= cost;
      count++;
    } else {
      break;
    }
  }

  return count;
}