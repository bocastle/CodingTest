function solution(k, score) {
  const hall = [];
  const answer = [];

  for (const s of score) {
    hall.push(s);
    hall.sort((a, b) => a - b);

    if (hall.length > k) {
      hall.shift();
    }

    answer.push(hall[0]);
  }

  return answer;
}