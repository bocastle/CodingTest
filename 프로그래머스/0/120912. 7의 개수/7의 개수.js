function solution(array) {
    var answer = 0;
    let _array = array.join(',','').replaceAll(',','')
 
    for(let i = 0; i<_array.length; i++){
        if(_array[i] === '7'){
            answer++
        }
    }

    return answer;
}