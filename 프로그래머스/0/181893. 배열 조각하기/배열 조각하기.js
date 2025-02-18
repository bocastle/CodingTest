function solution(arr, query) {
   
    let array = arr;
    
    for(let i=0;i < query.length;i++){
        if(i % 2 === 0){
            array = array.slice(0,query[i]+1)
        }else{            
            array = array.slice(query[i])
        }
    }

    return array;
}