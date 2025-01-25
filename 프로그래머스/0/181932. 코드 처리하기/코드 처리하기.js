function solution(code) {
  let mode = 0; 
  let ret = ""; 

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      // mode 변경
      mode = mode === 0 ? 1 : 0;
    } else {
      // mode에 따라 처리
      if (mode === 0 && i % 2 === 0) {
        ret += code[i]; 
      } else if (mode === 1 && i % 2 === 1) {
        ret += code[i]; 
      }
    }
  }

  // 결과 문자열이 비어 있으면 "EMPTY" 반환
  return ret === "" ? "EMPTY" : ret;

}