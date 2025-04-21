function solution(s) {
    let len = s.length;
    let mid = Math.floor(len / 2);

    return len % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.charAt(mid);          
}