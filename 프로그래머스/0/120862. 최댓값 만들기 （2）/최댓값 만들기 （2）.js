function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    
 
    return Math.max(numbers[n - 1] * numbers[n - 2], numbers[0] * numbers[1]);
}