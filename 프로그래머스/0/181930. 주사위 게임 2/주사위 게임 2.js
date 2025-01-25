function solution(a, b, c) {
    let answer = 0;
    let itemA = [a,b,c];
    let count = 0;

   
    
    if(a === b || a === c){
        count += 1;
    }
    if(b === a || b === c){
        count += 1;
    }
    if(c === a || c === b){
        count += 1;
    }
  
    if(count === 3){
        answer = (a + b + c) * (a**2 + b ** 2 + c ** 2) * (a**3 + b ** 3 + c ** 3)
    }else if(count === 2){
        answer =(a + b + c) * (a**2 + b ** 2 + c ** 2)
    }else{
        answer = a + b + c
    }
  
    
    return answer;
}