function solution(a, d, included) {
    let answer = 0;
    
    included.map((item,index)=>{
        
        if(item){
            console.log(index * d + a)
            answer += index * d + a
        }
    })
    
    return answer;
}