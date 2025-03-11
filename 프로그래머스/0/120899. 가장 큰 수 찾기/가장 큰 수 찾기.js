function solution(array) {

    let max = Math.max(...array)
    console.log(max)
    return [max, array.indexOf(max)];
}