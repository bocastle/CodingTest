function solution(myString, pat) {
    let answer = myString.lastIndexOf(pat);
  
    return answer !== -1 ? myString.slice(0, answer + pat.length) : "";
    
}