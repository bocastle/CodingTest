function solution(my_string, queries) {
    let answer =my_string;
    
    console.log(queries)
    for( const [s ,e] of queries){
        
        answer = answer.slice(0, s) + 
                 answer.slice(s, e + 1).split('').reverse().join('') + 
                 answer.slice(e + 1);
    }
    console.log(answer)
    return answer;
}