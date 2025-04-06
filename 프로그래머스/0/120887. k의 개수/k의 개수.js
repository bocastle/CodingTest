function solution(i, j, k) {
    let count = 0;
    const target = String(k);

    for (let num = i; num <= j; num++) {
        const strNum = String(num);
        for (let char of strNum) {
            if (char === target) count++;
        }
    }

    return count;
}