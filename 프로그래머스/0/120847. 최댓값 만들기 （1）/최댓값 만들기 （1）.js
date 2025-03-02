function solution(numbers) {
    let answer = numbers.sort((a,b)=>{
        return a>b ? 0 :-1
    });
    // console.log(answer[answer.length-1] *answer[answer.length-2])
    return answer[answer.length-1] *answer[answer.length-2];
}