export default class Inputs {
    constructor(startDate, startWeight, weightGoal, weeklyLoss) {
        this.startDate = startDate;
        this.startWeight = startWeight;
        this.weightGoal = weightGoal;
        this.weeklyLoss = weeklyLoss;
        this.startTDEE = startWeight * 33;
        this.avgWeight = startWeight;
    }

    weeksNeeded() {
        //NEEDS TO BE AN AVERAGE WEIGHT
        const difference = (this.avgWeight - this.weightGoal);
        this.weeksNeeded = (difference/this.weeklyLoss);
        return this.weeksNeeded;
    }
    
    caloriesNeeded() {
        const difference = (this.avgWeight - this.weightGoal);
        const kcalTotal = difference * 7700;
        this.dailyKcalNeeded = kcalTotal/this.weeksNeeded;
        return this.dailyKcalNeeded;
    }
}
