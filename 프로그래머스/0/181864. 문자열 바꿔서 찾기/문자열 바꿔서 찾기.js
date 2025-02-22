function solution(myString, pat) {
    var answer = 0;
    let transText = myString.split('').map((item)=>{
    return item === 'A'? 'B':'A'
    }).join('')
    
    return transText.includes(pat) ? 1 :0;
    
}