function solution(num, total) {
    // 연속된 숫자의 첫 번째 값 계산
    let x = (2 * total - num * (num - 1)) / (2 * num);
    
    // x부터 num개의 연속된 숫자 배열 생성
    return Array.from({ length: num }, (_, i) => x + i);
}