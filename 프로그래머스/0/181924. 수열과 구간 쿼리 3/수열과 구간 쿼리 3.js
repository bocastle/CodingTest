function solution(arr, queries) {
    let answer = arr;
    for (const [i, j] of queries) {
        
        [answer[i], answer[j]] = [answer[j], answer[i]];
    }
    // console.log("answer",answer)
    return answer;
}