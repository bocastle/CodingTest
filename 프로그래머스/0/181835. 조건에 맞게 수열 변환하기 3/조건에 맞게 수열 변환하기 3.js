function solution(arr, k) {
    var answer = [];
    if(k % 2 === 0){
        arr.map((item)=>{
            answer.push(item+k)
        })
    }
    if(k % 2 !== 0){
        arr.map((item)=>{
            answer.push(item*k)
        })
        
    }
    return answer;
}