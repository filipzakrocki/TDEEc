export default class Week {
    constructor(cells, weekNo) {
        this.weekNo = parseInt(weekNo);
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

    getStartDate(date, weeksToAdd) {

        let startDate, days, months, years, daysToAdd, outputDate;

        startDate = new Date(date);
        days = startDate.getDate();
        months = startDate.getMonth();
        years = startDate.getYear() + 1900;
        daysToAdd = (weeksToAdd * 7) - 7;

        outputDate = new Date(years, months, days + daysToAdd);
        this.startDate = outputDate.toDateString().slice(4);

        return this.startDate;
    }


}
