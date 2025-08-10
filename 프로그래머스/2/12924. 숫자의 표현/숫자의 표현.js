function solution(n) {
    let count = 0;
    
    
    for (let k = 1; k * (k + 1) / 2 <= n; k++) {
    
        const numerator = 2 * n - k * (k - 1);
        if (numerator % (2 * k) === 0) {
            const i = numerator / (2 * k);
            if (i >= 1 && Number.isInteger(i)) {
                count++;
            }
        }
    }
    
    return count;
}