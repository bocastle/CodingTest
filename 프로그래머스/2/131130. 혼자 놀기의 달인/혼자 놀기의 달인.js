function solution(cards) {
  //백준
  const visited = new Array(cards.length).fill(false);
  const groups = [];

  for (let i = 0; i < cards.length; i++) {
    if (visited[i]) continue;

    let count = 0;
    let cur = i;

    while (!visited[cur]) {
      visited[cur] = true;
      cur = cards[cur] - 1;
      count++;
    }

    groups.push(count);
  }

  groups.sort((a, b) => b - a);

  if (groups.length < 2) return 0;

  return groups[0] * groups[1];
}