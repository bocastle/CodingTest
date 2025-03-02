function solution(my_string) {
    let answer = my_string.replace(/[aeiouAEIOU]/g, "");
    
    return answer;
}