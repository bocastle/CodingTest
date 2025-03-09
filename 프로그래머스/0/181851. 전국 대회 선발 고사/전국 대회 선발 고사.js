function solution(rank, attendance) {
    let selected = [];
    
    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            selected.push([rank[i], i]);
        }
    }
    
    selected.sort((a, b) => a[0] - b[0]);
    
    let [a, b, c] = selected.slice(0, 3).map(student => student[1]);
    
    return 10000 * a + 100 * b + c;
}

