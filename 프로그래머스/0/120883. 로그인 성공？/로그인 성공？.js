function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;

    for (let [dbId, dbPw] of db) {
        if (dbId === inputId) {
            return dbPw === inputPw ? "login" : "wrong pw";
        }
    }

    return "fail";
}