function solution(k, m, score) {
   
    score.sort((a, b) => b - a);
    
    let totalProfit = 0;
    
   
    for (let i = 0; i <= score.length - m; i += m) {
        
        totalProfit += score[i + m - 1] * m;
    }
    
    return totalProfit;
}