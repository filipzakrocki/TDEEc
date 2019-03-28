import {
    inputElements
} from './base'

export const getInitialInput = () => {
    const initialInput = {
        startDate: inputElements.startDate.value,
        startWeight: inputElements.startWeight.value,
        weightGoal: inputElements.weightGoal.value,
        weeklyLoss: inputElements.weeklyLoss.value,
    }

    return initialInput;
}

export const setCurrentDate = () => {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yyyy = now.getFullYear();
    const today = `${yyyy}-${mm < 10 ? '0' + mm : mm}-${dd < 10 ? '0' + dd : dd}`;
    return today;
}

export const setWeeksNeeded = (weeksNeeded) => {
    if (weeksNeeded) {
        const weeksFormatted = Math.ceil(weeksNeeded)
        inputElements.weeksNeeded.value = weeksFormatted;
    }

}

export const dailyKcalDeficit = (kcalDeficit) => {
    if (kcalDeficit) {
        const kcalFormatted = Math.ceil(kcalDeficit)
        inputElements.kcalNeeded.value = kcalFormatted;
    }

}

export const dailyKcalNeeded = (kcalNeeded) => {
    const kcalFormatted = Math.ceil(kcalNeeded)
    inputElements.kcalNeeded.value = kcalFormatted;
}

export const avgWeight = (avgWeight) => {
    inputElements.avgWeight.value = avgWeight;
}

export const updateTDEE = (avgTDEE) => {
    inputElements.currentTDEE.value = avgTDEE;
}

export const totalLoss = (totalLoss) => {
    inputElements.totalLoss.value = totalLoss;
}

export const updateDailyKcal = (totalTDEE) => {
    if (totalTDEE) {
        inputElements.totalKcalDay.value = totalTDEE;
    }
}
