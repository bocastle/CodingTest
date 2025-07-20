function solution(s, skip, index) {
    
    const skipSet = new Set(skip);

    let result = "";
    
    for (let char of s) {
        let current = char.charCodeAt(0); 
        let count = 0; 
        
 
        while (count < index) {
            current++; 
            if (current > 'z'.charCodeAt(0)) current = 'a'.charCodeAt(0); 
            if (!skipSet.has(String.fromCharCode(current))) count++; 
        }
        
        result += String.fromCharCode(current);
    }
    
    return result;
}