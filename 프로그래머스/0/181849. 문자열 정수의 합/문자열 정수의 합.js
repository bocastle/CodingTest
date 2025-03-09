function solution(num_str) {
    let answer = 0;
    num_str.split("").map((item)=>{
       answer += Number(item) 
    })
    return answer;
}