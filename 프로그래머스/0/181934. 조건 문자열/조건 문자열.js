function solution(ineq, eq, n, m) {
    let answer = 0;
    
    
    if(ineq === '>' && eq ==='='){
        console.log(n >= m);
        answer = n >= m ? 1 : 0
    }
    if(ineq === '<' && eq ==='='){
        console.log(n <= m);
        answer = n <= m ? 1 : 0
    }
    if(ineq === '>' && eq ==='!'){
        console.log(n > m);
        answer = n > m ? 1 : 0
    }
    if(ineq === '<' && eq ==='!'){
        console.log(n < m);
        answer = n < m ? 1 : 0
    }
   
    
        
    return answer;
}