function solution(n, k) {
    var answer = [];
    
    for(let i =1; i<= n; i++){
        if(k * i <= n){
            answer.push(k * i)
        }
    }
    return answer;
}