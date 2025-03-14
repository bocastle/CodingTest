function solution(num, k) {
    let answer = -1;
    String(num).split("").some((item,index)=>{
        if(item === String(k)){  
            return answer = index + 1;
        }
    })
     
    
    
    return answer;
}