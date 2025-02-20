function solution(arr) {
    
    let array = [];
    let count = 0;
    
    while(true){
        
        let temp = [];
        if( count === 0){
         for(let i = 0; i < arr.length; i++){
        
            if(arr[i] >= 50 && arr[i]%2 === 0){
                
                temp.push(arr[i] / 2)
            }else if(arr[i] < 50 && arr[i]%2 === 1){
               if(arr[i] <= 100){
                    temp.push(arr[i]*2 + 1)    
                }else{
                    temp.push(arr[i])    
                }
            }else{
                
                temp.push(arr[i])
            }
         }   
        }
     
        if( count !== 0){
         for(let i = 0; i < array.length; i++){
            if(array[i] >= 50 && array[i]%2 === 0){
                temp.push(array[i] / 2)
            }else if(arr[i] < 50 && arr[i]%2 === 1){
                if(array[i] < 100){
                    temp.push(array[i]*2 + 1)    
                }else{
                    temp.push(array[i])    
                }
            }else{
                temp.push(array[i])
            }
         }   
        }

        if(JSON.stringify(array) === JSON.stringify(temp)){
            break;    
        }else{
            array = temp;
        }
        count++
        
    }
   
    console.log('count::',count);
    return count - 1;
}