function solution(n) {
    function countDivisors(num) {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        return count;
    }

    let compositeCount = 0;
    for (let i = 1; i <= n; i++) {
        if (countDivisors(i) >= 3) {
            compositeCount++;
        }
    }

    return compositeCount;
}