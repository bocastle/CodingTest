function solution(my_string) {
    let answer = 0;
 
    (my_string.match(/\d+/g) || []).map((item) =>
    
        answer += Number(item)                                   
    )
    return answer;
}