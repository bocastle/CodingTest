function solution(str1, str2) {
    let answer = '';
    let text = '';
     str1.split('').map((item,index) =>{
    
        text += item+str2[index]
        
        
    })  
    
    // answer = String(text).replaceAll(',','');
    answer = text
    return answer;
}