function solution(str_list, ex) {
    var answer = '';
    
    str_list.map((item)=>{
        
        if(!item.includes(ex)){
            answer += item
        }
    })
    return answer;
}