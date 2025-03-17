function solution(array, height) {
    var answer = 0;
    array.map((item)=>{
        if(Number(item) > height){
            answer++
        }
    })
    return answer;
}