function solution(a, b) {
    let answer = 0;
    let itemA = Number(`${a}${b}`);
    let itemB = 2 * a * b;
   
    if(itemA >= itemB){
        return answer = itemA;
    }else{
        return answer = itemB;
    }
    
    return answer;
}