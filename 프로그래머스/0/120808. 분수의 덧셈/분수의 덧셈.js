// 최대공약수(GCD) 구하기 (유클리드 호제법)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    // 공통 분모를 계산
    let commonDenom = denom1 * denom2;
    let commonNumer = numer1 * denom2 + numer2 * denom1;
    
    // 분자와 분모의 최대공약수 구하기
    let gcdValue = gcd(commonNumer, commonDenom);
    
    // 기약 분수로 변환
    return [commonNumer / gcdValue, commonDenom / gcdValue];
}


 

