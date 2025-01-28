function solution(number) {
    let answer = 0;
    number.split('').map((item)=>{
         answer += Number(item);
    })
    
    return answer%9;
}