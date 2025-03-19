function solution(arr) {
    let row = arr.length; 
    let col = arr[0].length; 
    let size = Math.max(row, col); 
    
 
    let newArr = arr.map(row => row.concat(Array(size - row.length).fill(0)));
    
    
    while (newArr.length < size) {
        newArr.push(Array(size).fill(0));
    }
    return newArr;
}