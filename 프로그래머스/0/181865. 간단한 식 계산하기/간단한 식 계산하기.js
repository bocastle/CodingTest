function solution(binomial) {
    var answer = 0;
    
    let transText = binomial.replaceAll(' ','')
    
    if(transText.includes('+')){
        answer = transText.split('+').reduce((acc,item)=>{
           return Number(acc) + Number(item)
       })
    }
    if(transText.includes('-')){
        answer = transText.split('-').reduce((acc,item)=>{
           return Number(acc) - Number(item)
       })
    }
     if(transText.includes('*')){
        answer = transText.split('*').reduce((acc,item)=>{
           return Number(acc) * Number(item)
       })
    }
    
    return answer;
}