function solution(n, words) {
    const seen = new Set();
    
    seen.add(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        const prevWord = words[i - 1];
        const currWord = words[i];

        if (prevWord[prevWord.length - 1] !== currWord[0] || seen.has(currWord)) {
          
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        seen.add(currWord);
    }
    
    return [0, 0];
}