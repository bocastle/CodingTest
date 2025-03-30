function solution(dots) {
    function getSlope(p1, p2) {
        return (p2[1] - p1[1]) / (p2[0] - p1[0]);
    }

   
    return (
        getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3]) ||
        getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3]) ||
        getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])
    ) ? 1 : 0;
}