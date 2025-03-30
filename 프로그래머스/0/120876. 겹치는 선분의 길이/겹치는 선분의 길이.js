function solution(lines) {
    let points = new Array(201).fill(0); 

    for (let [start, end] of lines) {
        for (let i = start + 100; i < end + 100; i++) {
            points[i]++;
        }
    }

    return points.filter(v => v > 1).length;
}