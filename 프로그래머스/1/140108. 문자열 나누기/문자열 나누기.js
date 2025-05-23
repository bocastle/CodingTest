function solution(s) {
    let count = 0; 
    let i = 0;     

    while (i < s.length) {
        let x = s[i];      
        let xCount = 0;
        let otherCount = 0;

        for (let j = i; j < s.length; j++) {
            if (s[j] === x) {
                xCount++;
            } else {
                otherCount++;
            }

            if (xCount === otherCount) {
                count++;
                i = j + 1; 
                break;
            }

            if (j === s.length - 1) {
                count++;
                i = s.length;
            }
        }
    }

    return count;
}