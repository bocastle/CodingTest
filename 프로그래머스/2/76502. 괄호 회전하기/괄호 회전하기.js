function solution(s) {
    let count = 0;
    const n = s.length;
    
 
    for (let x = 0; x < n; x++) {
       
        const rotated = s.slice(x) + s.slice(0, x);
       
        if (isValid(rotated)) {
            count++;
        }
    }
    
    return count;
}


function isValid(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of str) {
        if (brackets[char]) {
        
            stack.push(char);
        } else {
      
            const last = stack.pop();
            if (!last || brackets[last] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}