function solution(id_list, report, k) {
    
    const reportSet = new Set(report);
    
  
    const reportedCount = new Map();
    const reportList = new Map();   
    

    id_list.forEach(id => {
        reportedCount.set(id, 0);
        reportList.set(id, new Set());
    });
    
    
    reportSet.forEach(r => {
        const [reporter, reported] = r.split(' ');
        reportedCount.set(reported, reportedCount.get(reported) + 1);
        reportList.get(reporter).add(reported);
    });
    
 
    const answer = id_list.map(id => {
        let mailCount = 0;
        reportList.get(id).forEach(reported => {
            if (reportedCount.get(reported) >= k) {
                mailCount++;
            }
        });
        return mailCount;
    });
    
    return answer;
}