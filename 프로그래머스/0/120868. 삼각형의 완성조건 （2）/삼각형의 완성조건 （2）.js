function solution(sides) {
    const [a, b] = sides.sort((x, y) => x - y); 

    let case1 = b - (b - a + 1) + 1;  

    let case2 = (a + b - 1) - (b + 1) + 1;

    return case1 + case2;
}