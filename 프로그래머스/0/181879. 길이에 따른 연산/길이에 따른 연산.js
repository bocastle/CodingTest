function solution(num_list) {
    let answer = 0;
    for(let i = 0; i < num_list.length; i ++){
        if(num_list.length > 10){
            answer += num_list[i]
        }else{
            
            answer = answer === 0 ? 1* num_list[i] :answer*num_list[i]
        }
    }
    return answer;
}