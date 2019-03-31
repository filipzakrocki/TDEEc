export default class Inputs {
    constructor(input) {
        this.startDate = input.startDate;
        this.startWeight = input.startWeight;
        this.weightGoal = input.weightGoal;
        this.weeklyLoss = input.weeklyLoss;
        this.TDEE = input.startWeight * 33;
        this.avgWeight = input.startWeight;
    }

    weeksNeeded() {
        //NEEDS TO BE AN AVERAGE WEIGHT
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
        this.totalTDEE = this.TDEE - this.dailyKcalDeficit;
        return this.totalTDEE;
    }
}
