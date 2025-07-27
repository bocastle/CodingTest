function solution(number, limit, power) {
    
    function countDivisors(n) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count += (i * i === n) ? 1 : 2;
            }
        }
        return count;
    }
    
    let totalIron = 0;
    for (let knight = 1; knight <= number; knight++) {
        const attack = countDivisors(knight);
        totalIron += attack > limit ? power : attack;
    }
    
    return totalIron;
}