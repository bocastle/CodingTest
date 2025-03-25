function solution(n) {
    let num = 0; 
    let count = 0; 

    while (count < n) {
        num++; 
        if (num % 3 === 0 || String(num).includes('3')) {
            continue; 
        }
        count++;
    }

    return num;
}