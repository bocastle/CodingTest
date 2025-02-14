function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1,num2+1);
    console.log("numbers",numbers.slice(num1,num2+1))
    return answer;
}