function solution(arr) {
    let answer = [];

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        if(arr[i] === 2){
            answer.push(i)    
        }  
        
    }

      
      if (answer.length >= 2) {
        const start = answer[0]; 
        const end = answer[answer.length - 1]; 
        return arr.slice(start, end + 1);
      }
      
      if (answer.length === 1) {
        return [arr[answer[0]]];
      }

      return [-1];
}