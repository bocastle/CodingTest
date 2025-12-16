function solution(order) {
    const stack = [];           
    let box = 1;                
    let idx = 0;                
    
    while (true) {
        
        if (box <= order.length && box === order[idx]) {
            idx++;              
            box++;              
            continue;
        }
        
        if (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop();        
            idx++;
            continue;
        }
        
        if (box <= order.length) {
            stack.push(box);   
            box++;
            continue;
        }
        
        break;
    }
    
    return idx;  
}