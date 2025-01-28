function solution(intStrs, k, s, l) {
    let answer = [];
    
    intStrs.map((item,index)=>{
        let sliceNum =Number(item.slice(s,s +l));
        if(k <sliceNum){
             answer.push(sliceNum)
        }
        
        
    })

    
    
    return answer;
}