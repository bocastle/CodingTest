const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let _str =  str.split('').map((item)=>{
        if(item === item.toUpperCase()){
            return item.toLowerCase()
        }else{
            return item.toUpperCase()
        }
    }).join('');
    console.log(_str);
});