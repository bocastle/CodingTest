function solution(money) {
    var answer = [];
    let count = 0;
    while(true){
        
        
        
        if(money < 5500){
            
            console.log('count',count)
            console.log(money)
            answer.push(count,money)
            break;    
        }
        money -= 5500;
        count += 1;
        
    }
    return answer;
}