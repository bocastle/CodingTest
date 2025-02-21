function solution(numbers, direction) {
    var answer = [];
    console.log(direction)
    if(direction === 'right'){
        
        let num = numbers.pop()
        numbers.unshift(num)
        // console.log("numbers",numbers)
    }
    if(direction === 'left'){
        
        // console.log("numbers",numbers.shift())
        let num = numbers.shift()
        numbers.push(num)
        // console.log("numbers",numbers.push(numbers.shift()))
        // console.log("numbers",numbers)
    }
    return numbers;
}