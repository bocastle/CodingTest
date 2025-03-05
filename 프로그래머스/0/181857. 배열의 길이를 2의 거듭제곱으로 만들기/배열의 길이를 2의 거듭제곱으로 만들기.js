function solution(arr) {
    let n = arr.length;
    let power = 1;

    while (power < n) {
        power *= 2;
    }

    return arr.concat(new Array(power - n).fill(0));
}