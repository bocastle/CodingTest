function solution(n) {
    //문제 이해 하기 어렵네 한글어렵다....
    let answer = '';
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answer += '수';
        } else {
            answer += '박';
        }
    }
    
    return answer;
}