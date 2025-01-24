function solution(str1, str2) {
    let answer = '';
    let text = [];
     str1.split('').map((item,index) =>{
    
        text.push(item)
        
        str2.split("").map((_item,_index)=>{
            if(index === _index){
         text.push(_item)       
            }
         
        })
    })  
    // console.log(String(text).replaceAll(',',''))
    answer = String(text).replaceAll(',','');
    return answer;
}