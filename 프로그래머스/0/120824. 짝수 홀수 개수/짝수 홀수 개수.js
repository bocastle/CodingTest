function solution(num_list) {
    var answer = [];
    let num = 0;
    let _num = 0;
    for(let i = 0; i < num_list.length; i++){
        
        if(num_list[i] % 2 === 0){
            num = num + 1
        }else{
            _num = _num +1
        }
        
    }
    console.log(num,_num)
    return [num,_num];
}