function solution(num) {
    let answer = 0;
    let count = 1
    while(num > 1){ 
        count++

        if(num % 2 === 0){
            num = num / 2
            if(num / 2 === 1){
                answer = count
                break;
            }
        }else{
            num = num * 3 + 1
        }
        if(count === 500){
            return -1
        }
    }
    
    return answer
}