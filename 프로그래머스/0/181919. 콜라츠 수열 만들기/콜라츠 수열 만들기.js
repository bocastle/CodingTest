function solution(n) {
    let answer = [];
    let num = n
    
    for(let i = 0; i <= n; i++){
        
        if(num%2 === 0 && num !==1){
            answer.push(num);
            num = num/2  
        }
        
        if(num%2 !== 0 && num !==1){
            answer.push(num);
            num = 3 * num + 1  
        }
        if(num === 1){
            answer.push(num);
            break;
        }   
    }
    
    return answer;
}