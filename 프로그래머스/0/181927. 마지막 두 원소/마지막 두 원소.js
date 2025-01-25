function solution(num_list) {
    let answer = [];
    let num_list_number = num_list.length;
    if(num_list[num_list_number-1] > num_list[num_list_number - 2]){
        answer =  num_list[num_list_number - 1] - num_list[num_list_number - 2]
        
        
    }else{
        answer =  num_list[num_list_number - 1] * 2 
        
    }
    
    return num_list.concat(answer);
}