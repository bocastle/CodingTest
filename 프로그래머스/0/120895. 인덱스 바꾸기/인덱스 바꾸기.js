function solution(my_string, num1, num2) {
    var answer = '';
    for(let i in my_string){
        
        if(i == num1){
            answer += my_string[num2]    
        }else if(i == num2){
            answer += my_string[num1]    
        }else{
            answer += my_string[i]    
        }
        
        
    }
    console.log("answer",answer)
    return answer;
}