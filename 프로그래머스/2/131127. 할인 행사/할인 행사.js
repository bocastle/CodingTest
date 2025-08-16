function solution(want, number, discount) {
    
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    let count = 0;
    
    
    for (let i = 0; i <= discount.length - 10; i++) {
    
        const currentMap = new Map();
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            currentMap.set(item, (currentMap.get(item) || 0) + 1);
        }
        
        
        let isMatch = true;
        for (let [item, qty] of wantMap) {
            if (currentMap.get(item) !== qty) {
                isMatch = false;
                break;
            }
        }
        
        if (isMatch) count++;
    }
    
    return count;
}