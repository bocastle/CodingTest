function solution(num_list) {
    let answer = num_list.sort((a,b)=>{
    return a > b ? 0 : -1
    }).slice(0,5);
    
    
    return answer;
}