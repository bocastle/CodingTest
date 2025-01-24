function solution(n) {
    let answer = 0;
    let taskA = n % 2;
    
    for (let i = 0; i <= n; i++){
        
        if(taskA === 0 && i%2 === 0){  
            answer += i*i
        }
        if(taskA !== 0 && i%2 !== 0){  
            answer += i
        }
        
    }
    console.log(answer);
    return answer;
}