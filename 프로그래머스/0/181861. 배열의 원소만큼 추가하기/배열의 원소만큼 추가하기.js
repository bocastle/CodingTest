function solution(arr) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++){
        
        let count = 0;
        while(count < arr[i]){
        
            answer.push(arr[i])
            count++
        }
    }
    return answer;
}