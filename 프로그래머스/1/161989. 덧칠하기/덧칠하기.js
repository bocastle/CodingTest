function solution(n, m, section) {
    let count = 0;
    let lastPainted = 0;
    
    for (let pos of section) {
        if (pos > lastPainted) {
            count++;
            lastPainted = pos + m - 1;
        }
    }
    
    return count;
}