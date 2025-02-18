function solution(arr, query) {
   
    let array = arr;
    
    for(let i=0;i < query.length;i++){
        if(i % 2 === 0){
            console.log('짝',array)
            // array.push([0,2])
            array = array.slice(0,query[i]+1)
        }else{
            console.log('홀',array)
            array = array.slice(query[i])
        }
    }
    
    console.log("array:::",array)
    
    return array;
}