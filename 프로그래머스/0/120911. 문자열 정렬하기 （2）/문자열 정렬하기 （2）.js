function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort((a,b) => { return a > b ? 0 : -1 } ).join('')
    
    return answer;
}