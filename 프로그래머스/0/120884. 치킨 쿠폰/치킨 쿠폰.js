function solution(chicken) {
    let service = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        let newChicken = Math.floor(coupon / 10); 
        service += newChicken; 
        coupon = (coupon % 10) + newChicken; 
    }

    return service;
}