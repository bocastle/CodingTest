function solution(strArr) {
    let answer = [];
    
    strArr.map((item,idx) =>{
        
        if(!item.includes('ad')){
            answer.push(item)
        }
    })
    return answer;
}