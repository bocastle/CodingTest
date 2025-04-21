function solution(phone_number) {
    let stars = '*'.repeat(phone_number.length - 4);
    let lastFour = phone_number.slice(-4);
    return stars + lastFour;
}