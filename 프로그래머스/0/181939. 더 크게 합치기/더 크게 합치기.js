function solution(a, b) {
    let answer = 0;
    let itemA = `${a}${b}`;
    let itemB = `${b}${a}`;
    
    if(itemA < itemB){
        answer = Number(itemB);
    }else{
        answer = Number(itemA);
    }
    return answer;
}