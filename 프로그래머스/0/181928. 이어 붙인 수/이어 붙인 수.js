function solution(num_list) {
    
    let answerA = '';
    let answerB = '';
    
    num_list.map((item)=>{
        
        if(item%2 ===0){      
            answerA += item
        }else{
            answerB += item
        }
    })
    return Number(answerA) + Number(answerB);
}