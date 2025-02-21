function solution(numbers, direction) {
    var answer = [];
    console.log(direction)
    if(direction === 'right'){
        let num = numbers.pop()
        numbers.unshift(num)
    }
    if(direction === 'left'){
        let num = numbers.shift()
        numbers.push(num)

    }
    return numbers;
}