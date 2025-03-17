function solution(n) {
    let answer = 2;
    
    let count = 1 
  
    while(count < n){
   
        if( count * count === n ){
            answer = 1

            break;
        }
        count++
    }
    
    return answer;
}