export default class Week {
    constructor(cells, weekNo) {
        this.weekNo = weekNo;
        this.cells = cells;
    }


    //kg or kcal
    getAvgKg() {
        let sum = 0;
        this.cells.kg.forEach(e => sum += e);
        console.log(this.cells.kg);
        let avg = sum / this.cells.kg.length;
        this.avgKg = avg;
        return this.avgKg;
    }

    getAvgKcal() {
        let sum = 0;
        this.cells.kcal.forEach(e => sum += e);
        let avg = sum / this.cells.kcal.length;
        this.avgKcal = avg;
        return this.avgKcal;
    }

    calcChange(prevWeight) {
        this.weeklyLoss = this.avgKg - prevWeight;
        return this.weeklyLoss
    }
    
    calcTdee() {
        const newKcal = (Math.abs(this.weeklyLoss) * 7700) / 7; // 7700 kcal per 1 kg per day
        this.tdee = newKcal + this.avgKcal;
        return this.tdee;
    }


    //calculating tdee
    //TDEE = 7700kcal => 1 kg
    //
    //DEFICIT OF 0.7 x 7700 = 5390
    //
    //daily deficit = 5390/7
    //
    //new TDEE = avgkcal + daily deficit 7700
    //    
}
