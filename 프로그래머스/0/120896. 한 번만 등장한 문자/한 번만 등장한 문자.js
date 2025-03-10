function solution(s) {
    var answer = '';
    let array = s.split('').sort().reduce((cur,next) =>{
         cur[next] = (cur[next] || 0) + 1;
        return cur;
    },[])
  
   
    for (let [key, value] of Object.entries(array)) {
        if(value === 1){
            answer += key
        }
    }

    return answer;
}