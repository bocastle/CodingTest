function solution(quiz) {
    var answer = [];
    
    for(const X of quiz){
     
        if(eval(X.split('=')[0]) !== Number(X.split('=')[1]) ){
            answer.push('X')
        }else{
            answer.push('O')
        }
    
    }
    return answer;
}