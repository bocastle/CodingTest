function solution(price) {
    var answer = 0;
    
    if(100000 <= price && 300000 > price){
        
        return Math.floor(price * 0.95)
    }else if(300000 <= price && 500000 > price){
        
        return Math.floor(price * 0.9)
    }else if(500000 <= price){
        
        return Math.floor(price * 0.8)
    }else{
        return Math.floor(price)
    }
    
    return answer;
}
// // function discount(price){
// //     console.log("price",price)
// //     return 5;
// // }

// function solution(price) {
//     var answer = 0;
//     // console.log("price",String(price).slice(0,2))
//     // if(10 <= String(price).slice(0,2) && 20 > String(price).slice(0,2)){
//     //     console.log("price",price)
//     // }
//     console.log('1',price)
//     console.log('1',price * 2)
//     // discount(String(price).replaceAll(',',''))
//     return answer;
// }