function solution(my_strings, parts) {
    let answer = '';
       
    for(let i = 0; i < my_strings.length;){    
        for(const [s,e] of parts){
            
            answer += my_strings[i].slice(s,e+1)
            i++
        }
    }
 
    return answer;
}