const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    let text = `!@#$%^&*(\\'"<>?:;`;
    console.log(text);
    
});