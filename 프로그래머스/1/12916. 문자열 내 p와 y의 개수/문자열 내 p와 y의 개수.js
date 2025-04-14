function solution(s){
   
    
    console.log('Hello Javascript',s.toLowerCase())
    let strP = 0;
    let strY = 0;
    s.toLowerCase().split('').map((item) =>{
            if(item === 'p'){
             strP++
            } 
            if(item === 'y'){
             strY++
            } 
        }
    )
    console.log("strP",strP)
    return strP === strY ? true : false;
}