function solution(my_string, overwrite_string, s) {
    let answer = '';
    let start = my_string.slice(0,s);
    let center = overwrite_string;
    let end = my_string.slice((s+overwrite_string.length),my_string.length);
    answer = start+center+end
    
    return answer;
}