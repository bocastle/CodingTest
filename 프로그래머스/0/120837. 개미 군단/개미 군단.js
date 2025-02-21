function solution(hp) {

    let count = 0;
    while(hp > 0){
        
        if( hp >= 5){
            hp -= 5    
        }else if( hp >= 3){
            hp -= 3
        }else{
            hp--
        }
        count ++
        
    }
    console.log('count',count)
    return count;
}