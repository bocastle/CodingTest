function solution(num_list) {
    let answerA = 0;
    let answerB = 1;
    num_list.map((item,index)=>{
        answerA += item
        answerB *= item 
    })
    
    
    
    return answerB < answerA * answerA  ? 1 : 0;
}