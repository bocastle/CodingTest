function solution(array, n) {
    var answer = array.reduce((a,b) =>{
        return Math.abs(a - n) === Math.abs(b - n) ? Math.min(a, b) : Math.abs(a - n) < Math.abs(b - n) ? a : b
    })
    return answer;
}