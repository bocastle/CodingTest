function solution(s, n) {
    const array = s.split("")
    let answer = ""
    for(let i = 0; i < array.length; i++){
        if (array[i] === " ") {
            answer += " ";
            continue; 
        }
        if(array[i] !== " "){
            let isUpperType = array[i] === array[i].toUpperCase();
            
            const startIndex = isUpperType ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            const nextIndex = (array[i].charCodeAt(0) - startIndex + n) % 26;
            const transText = String.fromCharCode(nextIndex + startIndex);
            
            answer += transText     
        }
       
       
        
    }
    return answer
}