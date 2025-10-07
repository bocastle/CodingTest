function solution(clothes) {
  
    const clothesMap = {};
 
    for (const [name, type] of clothes) {
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }
    
    
    let total = 1;
    for (const type in clothesMap) {
        total *= clothesMap[type] + 1; 
    }
 
    return total - 1;
}