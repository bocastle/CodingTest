function solution(arr, idx) {
    let answer = -1;
    // console.log('arr',arr)
    for(let i = 0; i < arr.length; i++){
        // console.log("arr",arr[i])
        // console.log("idx-1",idx-1)
        // console.log("iii",i)
        // console.log("상태",idx - 1 < i)
        // console.log("arr[i]",arr[i])
        if(arr[i] === 1 && idx - 1 < i){
            console.log('넣자',i)
            return answer = i
        }
       
    }
    return answer;
}