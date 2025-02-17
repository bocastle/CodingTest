function solution(num_list) {
    var answer = -1;
    for(let i = 0; i < num_list.length; i++){
        
        if(Math.sign(num_list[i]) === -1){
            return i
        }
    }
    return answer;
}