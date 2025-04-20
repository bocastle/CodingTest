function solution(arr) {
    let answer = 0
    arr.map((item) =>{
        answer = item + answer
    })
    
    return answer / arr.length;
}