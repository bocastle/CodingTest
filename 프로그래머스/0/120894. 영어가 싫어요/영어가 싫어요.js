function solution(numbers) {
    const numberObj = {
        "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
        "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"
    };
    for (let i in numberObj){
        numbers = numbers.replaceAll(i, numberObj[i])
    }
    console.log("numbers",numbers)
   
    return Number(numbers);
}