function solution(board) {
    const n = board.length; // 보드 크기 (n x n)
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1]; // 8방향 (행)
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1]; // 8방향 (열)

    // 1. 지뢰(1) 위치를 찾고, 위험지역(2)로 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) { // 지뢰 발견
                for (let d = 0; d < 8; d++) { // 8방향 체크
                    let ni = i + dx[d];
                    let nj = j + dy[d];
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n && board[ni][nj] === 0) {
                        board[ni][nj] = 2; // 위험지역 표시
                    }
                }
            }
        }
    }

    // 2. 안전한 지역(0)의 개수 카운트
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) safeCount++;
        }
    }

    return safeCount;
}