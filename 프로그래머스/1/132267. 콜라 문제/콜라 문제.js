function solution(a, b, n) {
    let total = 0;

    while (n >= a) {
        const newCoke = Math.floor(n / a) * b;
        total += newCoke;
        n = Math.floor(n / a) * b + (n % a);
    }

    return total;
}