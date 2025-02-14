function solution(age) {
    var answer = '';
    
    String(age).split('').map((item,idx)=>{
        answer += String.fromCharCode(97+Number(item))
    })
    
    return answer;
}