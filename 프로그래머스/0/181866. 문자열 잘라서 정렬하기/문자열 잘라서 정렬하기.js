function solution(myString) {
    let answer = [];
    
    myString.split('x').sort().map((item)=>{
        
        if(item !== ''){
            answer.push(item);    
        }
        
    })
    return answer;
}