export default class Inputs {
    constructor(object) {
        this.startDate = object.startDate;
        this.startWeight = object.startWeight;
        this.weightGoal = object.weightGoal;
        this.weeklyLoss = object.weeklyLoss;
        this.avgWeight = object.startWeight;
    }

    getWeeksNeeded() {

        if (this.weeklyLoss) {
            const difference = (this.avgWeight - this.weightGoal);
            this.weeksNeeded = (difference / this.weeklyLoss);
            return this.weeksNeeded;
        }

    }

    caloriesDeficitNeeded() {
        const difference = (this.avgWeight - this.weightGoal);
        const kcalTotal = difference * 7700;
        this.dailyKcalDeficit = (kcalTotal / this.weeksNeeded) / 7;
        return this.dailyKcalDeficit;
    }

    totalLoss() {
        this.totalLoss = this.startWeight - this.avgWeight;
        return this.totalLoss;
    }

    totalCaloriesNeeded() {
        this.totalTDEE = this.tdee - this.dailyKcalDeficit;
        return Math.floor(this.totalTDEE);
    }
    
    setStartTdee() {
        this.tdee = this.startWeight * 33;
        return this.tdee
    }
    
    
}
