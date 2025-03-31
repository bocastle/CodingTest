function solution(a, b) {
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }

    let denominator = b / gcd(a, b); 

    while (denominator % 2 === 0) denominator /= 2; 
    while (denominator % 5 === 0) denominator /= 5; 

    return denominator === 1 ? 1 : 2; 
}