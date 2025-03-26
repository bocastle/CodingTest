function solution(spell, dic) {
    var answer = 2;
   
    for(let i = 0; i< dic.length; i++){

       if ([...dic[i]].sort().join('') === [...spell].sort().join('')) {
            return 1; 
        }
    }
    return answer;
}