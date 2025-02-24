function solution(numbers, k) {
    let userIdx = 0;
    
    for(let i = 1; i < k; i ++){
        userIdx = (userIdx + 2) % numbers.length;
    }
    
    return numbers[userIdx];
}