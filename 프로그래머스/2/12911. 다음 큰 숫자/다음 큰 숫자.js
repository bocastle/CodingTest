function solution(n) {
 
    const countOnes = (num) => num.toString(2).split('').filter(bit => bit === '1').length;
    const targetOnes = countOnes(n);
    
    let next = n + 1;
    while (countOnes(next) !== targetOnes) {
        next++;
    }
    
    return next;
}