function solution(players, callings) {
    
    const rankMap = new Map();
    players.forEach((player, index) => rankMap.set(player, index));
    
    for (let called of callings) {
    
        const currentRank = rankMap.get(called);
        
        const frontPlayer = players[currentRank - 1];
        
        [players[currentRank], players[currentRank - 1]] = [players[currentRank - 1], players[currentRank]];
        
        rankMap.set(called, currentRank - 1);
        rankMap.set(frontPlayer, currentRank);
    }
    
    return players;
}