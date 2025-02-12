function solution(my_string) {
    
      // A-Z(26개) + a-z(26개) = 총 52개 배열
    let answer = new Array(52).fill(0);

    for (let char of my_string) {
        let code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            // 대문자 A-Z (아스키 코드: 65~90)
            answer[code - 65] += 1;
        } else if (code >= 97 && code <= 122) {
            // 소문자 a-z (아스키 코드: 97~122)
            answer[code - 97 + 26] += 1;
        }
    }

    return answer;
}