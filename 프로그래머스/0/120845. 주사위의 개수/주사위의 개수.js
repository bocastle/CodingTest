function solution(box, n) {
    let [width, height, depth] = box;
    
    let wCount = Math.floor(width / n);
    let hCount = Math.floor(height / n);
    let dCount = Math.floor(depth / n);
    
    return wCount * hCount * dCount;
}