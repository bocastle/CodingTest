function solution(my_string) {
    var answer = '';
    
    my_string.split('').forEach((item)=>{
        if(item === item.toLowerCase()){
            answer += item.toUpperCase() 
        }
        if(item === item.toUpperCase()){
            answer += item.toLowerCase()
        }
        
    })
    return answer;
}