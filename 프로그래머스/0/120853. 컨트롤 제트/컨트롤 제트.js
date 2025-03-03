function solution(s) {
    let stack = [];
    let arr = s.split(" "); 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Z") {
            stack.pop(); 
        } else {
            stack.push(Number(arr[i])); 
        }
    }

    return stack.reduce((sum, num) => sum + num, 0); 
}
