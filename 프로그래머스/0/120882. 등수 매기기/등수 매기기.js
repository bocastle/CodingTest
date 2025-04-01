function solution(score) {
    
    let averages = score.map(([eng, math], idx) => [(eng + math) / 2, idx]);

  
    averages.sort((a, b) => b[0] - a[0]);

  
    let ranks = new Array(score.length);
    let rank = 1;

    for (let i = 0; i < averages.length; i++) {
        if (i > 0 && averages[i][0] < averages[i - 1][0]) {
            rank = i + 1;
        }
        ranks[averages[i][1]] = rank; 
    }

    return ranks;
}