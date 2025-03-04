function solution(my_string) {
    var answer = [];
    for(let i =0; i< my_string.length; i++ ){
        if(my_string[i] <10){
            answer.push(Number(my_string[i]));
        }
    }
    return answer.sort((a,b) =>{
        return a < b ? -1 : 0
    });
}