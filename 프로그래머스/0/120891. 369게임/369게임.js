function solution(order) {
    var answer = 0;
    
    for(let i = 0; i < String(order).length; i++){
        console.log(String(order)[i])
        if(String(order)[i] === '3' || String(order)[i] === '6' || String(order)[i] === '9'){
            answer++
        }
        
    }
    return answer;
}