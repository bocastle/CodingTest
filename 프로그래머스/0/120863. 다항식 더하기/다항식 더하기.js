function solution(polynomial) {
    let xSum = 0, numSum = 0; 
    
    polynomial.split(" + ").forEach(term => {
        if (term.includes("x")) {
            let coeff = term === "x" ? 1 : parseInt(term); 
            xSum += coeff;
        } else {
            numSum += parseInt(term); 
        }
    });

    let result = [];
    if (xSum) result.push(xSum === 1 ? "x" : `${xSum}x`);
    if (numSum) result.push(numSum.toString());

    return result.join(" + ");
}