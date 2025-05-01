function solution(s) {
    let answer = false;
    
    const testCase = /^\d+$/;
    if(s.length === 4 || s.length === 6){
           answer = testCase.test(s);  
    }
 
   
    return answer;
}