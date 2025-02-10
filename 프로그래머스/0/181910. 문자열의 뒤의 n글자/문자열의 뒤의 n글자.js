function solution(my_string, n) {
    var answer = my_string.slice(my_string.length - n, my_string.length);
    // console.log(my_string.slice(my_string.length - 11, my_string.length))
    return answer;
}