function solution(arr, queries) {
    let answer = [];
    
    for (const [s, e, k] of queries) {
    let minVal = Infinity; // k보다 큰 가장 작은 값을 찾기 위한 변수

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minVal) {
        minVal = arr[i];
      }
    }

    // 결과가 존재하지 않으면 -1, 존재하면 minVal 추가
    answer.push(minVal === Infinity ? -1 : minVal);
  }
    
    return answer;
}