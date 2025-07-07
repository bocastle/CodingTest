function solution(a, b) {
    // 2016년 a월 b일의 Date 객체 생성 (월은 0부터 시작하므로 a-1)
    const date = new Date(2016, a - 1, b);
    // 요일 배열
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // getDay()는 0(일요일)부터 6(토요일)까지 반환
    return days[date.getDay()];
}