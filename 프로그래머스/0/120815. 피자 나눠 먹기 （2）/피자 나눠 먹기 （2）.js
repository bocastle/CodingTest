function solution(n) {
  
    let pizza = 6
    
    
    for(let i = 1; i <= 100; i++){
        if(pizza % n === 0){
            return i;
        }else{
            pizza = pizza + 6;
        }   
    }
}