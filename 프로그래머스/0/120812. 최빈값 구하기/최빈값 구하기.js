function solution(array) {
    const binMap = new Map();
    
    array.forEach(num => {
        binMap.set(num, (binMap.get(num) || 0) + 1);
    });
    let maxFreq = Math.max(...binMap.values());
    let modes = [...binMap.entries()].filter(([_, item]) => item === maxFreq).map(([num]) => num);

    return modes.length > 1 ? -1 : modes[0];
    
}