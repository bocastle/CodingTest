function solution(X, Y) {
    
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    for (let digit of X) {
        countX[digit]++;
    }
    
    for (let digit of Y) {
        countY[digit]++;
    }
    
    let result = [];
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        if (commonCount > 0) {
            result.push(String(i).repeat(commonCount));
        }
    }
    
    if (result.length === 0) return "-1"; 
    const answer = result.join("");
    return answer[0] === "0" ? "0" : answer; 
}