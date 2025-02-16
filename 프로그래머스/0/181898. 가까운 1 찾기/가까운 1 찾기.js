function solution(arr, idx) {
    let answer = -1;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1 && idx - 1 < i){
            return answer = i
        }
       
    }
    return answer;
}