function solution(name, yearning, photo) {
  
    const scoreMap = {};
    for (let i = 0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i];
    }

    
    return photo.map(persons => {
        return persons.reduce((sum, person) => {
            return sum + (scoreMap[person] || 0);
        }, 0);
    });
}
