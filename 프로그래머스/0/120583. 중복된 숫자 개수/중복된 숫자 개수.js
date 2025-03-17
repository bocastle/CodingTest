function solution(array, n) {
    var answer = 0;
    array.map((item)=>{
        console.log(item)
        if(item === n){
            answer++
        }
        
     
    })
    return answer;
}