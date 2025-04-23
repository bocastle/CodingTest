function solution(s) {
    return s.split('').sort((a, b) => {
        const isUpperA = a === a.toUpperCase();
        const isUpperB = b === b.toUpperCase();
        if (isUpperA && !isUpperB) return 1;
        if (!isUpperA && isUpperB) return -1;
        return a > b ? -1 : a < b ? 1 : 0; 
    }).join('');
}