function solution(myStr) {
    var answer = [];
    let text = ''
    for(let i =0;i<myStr.length; i++){
     
        
        if(myStr[i] === 'a' || myStr[i] === 'b'|| myStr[i] === 'c'){
            if(text !==''){
                answer.push(text);   
            }
            text = '';
        }else{
            text += myStr[i];
        }
        if(myStr.length-1 === i){    
             if(text !==''){
                answer.push(text);   
            }
        }
        
    }
    
    return !answer.length ?["EMPTY"]:answer;
}