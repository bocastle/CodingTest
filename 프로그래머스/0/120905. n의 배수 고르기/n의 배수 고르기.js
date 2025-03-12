function solution(n, numlist) {
    var answer = [];
    console.log("numlist",numlist.length)
    numlist.map((item)=>{
        if(item % n === 0){
            answer.push(item)    
        }
        
    })
    return answer;
}