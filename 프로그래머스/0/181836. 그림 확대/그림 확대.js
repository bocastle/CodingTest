function solution(picture, k) {
    return picture.reduce((acc, row) => {
        const expandedRow = row.replace(/./g, char => char.repeat(k)); 
        return acc.concat(Array(k).fill(expandedRow)); 
    }, []);
    
}

"xx", ".x.", "x.x"
"x.x", ".x.", "x.x"