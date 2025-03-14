function solution(date1, date2) {
    var answer = 0;

    if(date1.join().replaceAll(',','') - date2.join().replaceAll(',','')  < 0){
        return 1    
    }
    
    return answer;
}