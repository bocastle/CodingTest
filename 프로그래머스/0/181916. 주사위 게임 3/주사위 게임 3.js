function solution(a, b, c, d) {
    
    const nums = [a, b, c, d];
    const countMap = new Map();

    // 주사위 값의 빈도수 계산
    nums.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    const uniqueValues = [...countMap.keys()];
    const sameValue = [...countMap.values()].sort((a, b) => b - a);

    // #1: 네 주사위 숫자가 모두 같을 때
    if (sameValue[0] === 4) {
        return 1111 * uniqueValues[0];
    }

    // #2: 세 숫자가 같고 나머지 하나는 다를 때
    if (sameValue[0] === 3) {
        const p = uniqueValues.find(key => countMap.get(key) === 3);
        const q = uniqueValues.find(key => countMap.get(key) === 1);
        return Math.pow(10 * p + q, 2);
    }

    // #3: 두 숫자가 각각 두 번 나왔을 때
    if (sameValue[0] === 2 && sameValue[1] === 2) {
        const [p, q] = uniqueValues;
        return (p + q) * Math.abs(p - q);
    }

    // #4: 두 숫자가 같고 나머지 두 숫자가 각각 다른 값일 때
    if (sameValue[0] === 2 && sameValue[1] === 1 && sameValue[2] === 1) {
            const p = uniqueValues.find(key => countMap.get(key) === 2);
            const [q, r] = uniqueValues.filter(key => countMap.get(key) === 1);
        return q * r;
    }

    // #5: 네 숫자가 모두 다를 때
return Math.min(...nums);
    
    
}