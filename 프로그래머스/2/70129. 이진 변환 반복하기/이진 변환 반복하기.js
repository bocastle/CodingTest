function solution(s) {
    let convertCount = 0;
    let totalZeroCount = 0;
    
    let current = s;
    
    while (current !== "1") {
        let ones = '';
        let zeroCount = 0;
        
        for (let char of current) {
            if (char === '1') {
                ones += '1';
            } else {
                zeroCount++;
            }
        }
        
        totalZeroCount += zeroCount;
        convertCount++;
        
        const length = ones.length;
        current = length.toString(2);
    }
    
    return [convertCount, totalZeroCount];
}