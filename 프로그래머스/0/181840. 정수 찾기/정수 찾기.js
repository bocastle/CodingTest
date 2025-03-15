function solution(num_list, n) {
    var answer = 0;
    num_list.some((item)=>{
        if(item === n){
            return answer = 1
        }
    })
    return answer;
}