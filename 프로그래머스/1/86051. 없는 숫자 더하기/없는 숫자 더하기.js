function solution(numbers) {
    let answer = 0;
    let i = 0
    for(let i = 0; i<=9; i++){
        if(!numbers.includes(i)){
            answer = i + answer
        }
    }
    
    return answer;
}