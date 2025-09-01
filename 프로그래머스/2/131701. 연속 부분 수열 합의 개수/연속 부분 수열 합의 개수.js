function solution(elements) {
    const n = elements.length;
    const result = new Set(); 

    
    for (let length = 1; length <= n; length++) {
    
        for (let start = 0; start < n; start++) {
            let subSum = 0;
    
            for (let i = 0; i < length; i++) {
                subSum += elements[(start + i) % n];
            }
            result.add(subSum);
        }
    }

    return result.size; 
}