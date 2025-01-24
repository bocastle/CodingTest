function solution(str1, str2) {
    let answer = '';
    let text = [];
     str1.split('').map((item,index) =>{
    
        text.push(item+str2[index])
        
        
    })  
    
    answer = String(text).replaceAll(',','');
    return answer;
}