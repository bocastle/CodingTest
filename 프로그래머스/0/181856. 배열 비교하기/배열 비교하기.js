function solution(arr1, arr2) {
    let answer = 0;
    if(arr1.length === arr2.length){
        let arr1Count =0;
        let arr2Count =0;
         arr1.map((item,idx)=>{
             arr1Count +=item;
        })
         arr2.map((item,idx)=>{
             arr2Count +=item;
        })
        if(arr1Count === arr2Count){
            return 0   
        }else{
            return arr1Count > arr2Count ? 1 :-1   
        }
        
    }else if(arr1.length > arr2.length){
        return 1
    }else if(arr1.length < arr2.length){
        return -1
    }else{
        return answer;    
    }
    
    
}