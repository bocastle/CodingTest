function solution(arr, intervals) {
    var answer = [];
    
    for(const [a1,b1] of intervals){
        
        answer.push(...arr.slice(a1,b1+1)) 
    }
    console.log('answer',answer)
    return answer;
}