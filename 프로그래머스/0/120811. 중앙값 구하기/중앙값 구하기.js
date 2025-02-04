function solution(array) {
    
    let arraySort = array.sort((a, b) => a - b); //오름차순
    let middleNum = Math.floor(array.length/2); //중간위치 확인
    let answer = arraySort[middleNum];
    return answer;
}