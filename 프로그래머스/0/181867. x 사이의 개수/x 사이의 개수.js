function solution(myString) {
    let answer = [];
    
    myString.split("x").map((item,idx)=>{
       answer.push(item.length) 
    })
    return answer;
}