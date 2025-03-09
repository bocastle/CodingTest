function solution(arr, delete_list) {
    let answer = [];
    
    arr.filter((item)=>{
        if(!delete_list.includes(item)){
            answer.push(item)    
        }
    })
    return answer;
}