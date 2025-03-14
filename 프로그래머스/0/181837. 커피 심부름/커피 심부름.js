function solution(order) {
    let answer = 0;
    
    order.map((item,index) =>{
         if(item.includes("latte")){
            answer += 5000
        }else{
            answer += 4500
        }
        
    })
    return answer;
}