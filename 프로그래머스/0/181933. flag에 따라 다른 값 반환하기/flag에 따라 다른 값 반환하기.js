function solution(a, b, flag) {
    let answer = 0;
    if(flag){
        answer = a + b
    }
    if(!flag){
        answer = a - b
    }
    console.log(answer)
    
    return answer;
}