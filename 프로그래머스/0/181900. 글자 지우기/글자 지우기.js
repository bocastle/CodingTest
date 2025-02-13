function solution(my_string, indices) {
    let answer = my_string.split('').filter((item, index) => !indices.includes(index)).join('');;
    
    
     


    return answer;
}