function solution(k, dungeons) {
    const n = dungeons.length;
    const visited = new Array(n).fill(false); 
    let maxDungeons = 0; 
    
    function dfs(fatigue, count) {
      
        maxDungeons = Math.max(maxDungeons, count);
        
    
        for (let i = 0; i < n; i++) {
            if (!visited[i] && fatigue >= dungeons[i][0]) {
              
                visited[i] = true;
                dfs(fatigue - dungeons[i][1], count + 1); 
                visited[i] = false; 
            }
        }
    }
    
    dfs(k, 0); 
    return maxDungeons;
}