function solution(my_string, alp) {
    let answer = '';
    for(let i =0; i<my_string.length; i++){
        if(my_string[i] === alp){
            answer += alp.toUpperCase()
        }else{
            answer += my_string[i].toLowerCase()
        }
    }
    return answer;
}