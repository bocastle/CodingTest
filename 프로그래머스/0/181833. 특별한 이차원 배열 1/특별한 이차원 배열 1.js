function solution(n) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0)); 
    
    console.log("answer",answer)
    for(let i = 0; i < n; i++){
        answer[i][i] = 1
        
    }
    
    return answer;
}