function solution(n) {
    let arr = Array.from({ length: n }, () => Array(n).fill(0)); 
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    
    let row = 0, col = 0, dir = 0;
    for (let i = 1; i <= n * n; i++) {
        arr[row][col] = i; 
        
        let nextRow = row + directions[dir][0];
        let nextCol = col + directions[dir][1];

       
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || arr[nextRow][nextCol] !== 0) {
            dir = (dir + 1) % 4; 
            nextRow = row + directions[dir][0];
            nextCol = col + directions[dir][1];
        }

        row = nextRow;
        col = nextCol;
    }

    return arr;
}