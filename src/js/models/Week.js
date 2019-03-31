export default class Week {
    constructor(cells, weekNo) {
        this.weekNo = weekNo-1;
        this.cells = cells;
    }
    
    getAvg(data) {
        let sum = 0;
        this.cells.data.forEach(e => sum += e);
        let avg = sum / data.length;
        this.data.avg = avg;
        return this.data.avg;
    }
    
    
}