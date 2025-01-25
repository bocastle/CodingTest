function solution(n, control) {
    let answer = n;
   console.log('n',n)
    control.split('').map((item)=>{
        if(item === 'w'){
            answer += 1
        }
        if(item === 's'){
            answer -= 1
        }
        if(item === 'd'){
            answer += 10
        }
        if(item === 'a'){
            answer -= 10
        }
    })
    console.log(answer)
    return answer;
}
