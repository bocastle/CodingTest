function solution(strArr) {
    let lengthMap = {};

   
    for (let str of strArr) {
        let len = str.length;
        lengthMap[len] = (lengthMap[len] || 0) + 1;
    }

  
    return Math.max(...Object.values(lengthMap));
}
