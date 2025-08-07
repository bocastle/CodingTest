function solution(k, tangerine) {
    
    const sizeCount = {};
    for (let size of tangerine) {
        sizeCount[size] = (sizeCount[size] || 0) + 1;
    }
    
    const frequencies = Object.values(sizeCount).sort((a, b) => b - a);
    
    let count = 0;
    let total = 0;
    
    for (let freq of frequencies) {
        total += freq;
        count++;
        if (total >= k) break;
    }
    
    return count;
}