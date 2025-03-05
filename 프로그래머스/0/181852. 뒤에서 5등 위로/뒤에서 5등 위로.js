function solution(num_list) {
    var answer = num_list.sort((a,b)=> {
        return a < b ? -1 :0
    });
    
    return answer.slice(5,answer.length);
}