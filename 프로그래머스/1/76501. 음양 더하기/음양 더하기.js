function solution(absolutes, signs) {
    let answer = 0;
    signs.map((item,index) =>{
        if(item){
        answer+=absolutes[index]    
        }else{
        answer-=absolutes[index]    
        }
        
    })
    
    return answer;
}