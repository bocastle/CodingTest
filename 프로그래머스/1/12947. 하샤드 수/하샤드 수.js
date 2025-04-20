function solution(x) {
  
    let cul = 0;
    let num = String(x).split("")
    console.log(num)
    num.map((item) =>{
     cul += Number(item);
    })
    console.log(cul)

    return x % cul === 0;;
}
