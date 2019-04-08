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

export const avgWeight = (avgWght) => {
    const avgWt = parseFloat(avgWght).toFixed(2);
    inputElements.avgWeight.value = avgWt;
}

export const updateTDEE = (avgTDEE) => {
    inputElements.currentTDEE.value = Math.floor(avgTDEE);
}

export const totalLoss = (totalLoss) => {
    totalLoss = totalLoss.toFixed(2);
    inputElements.totalLoss.value = totalLoss;
}

export const updateDailyKcal = (totalTDEE) => {
    if (totalTDEE) {
        inputElements.totalKcalDay.value = Math.floor(totalTDEE);
    }
}

export const setStartDate = (startDate) => {
    inputElements.startDate.value = startDate;
}

export const setStartWeight = (startWeight) => {
    inputElements.startWeight.value = startWeight;
}

export const setGoalWeight = (goal) => {
    inputElements.weightGoal.value = goal;
}

export const setGoalLoss = (goal) => {
    inputElements.weeklyLoss.value = goal;
}

export const setDays = (startDate) => {
    let date = new Date(startDate).getDay();

    const weekdays = inputElements.weekDays;
    const days = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.',
                 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.']
    weekdays.forEach((e = date) => {
        e.innerHTML = days[date];
        date++;
    })
}

export const restoreInput = (stateInputs) => {
        setWeeksNeeded(stateInputs.weeksNeeded);
        dailyKcalDeficit(stateInputs.dailyKcalDeficit);
        updateTDEE(stateInputs.tdee);
        avgWeight(stateInputs.avgWeight);
        totalLoss(stateInputs.totalLoss);
        updateDailyKcal(stateInputs.totalTDEE);
        setStartDate(stateInputs.startDate);
        setStartWeight(stateInputs.startWeight);
        setGoalWeight(stateInputs.weightGoal);
        setGoalLoss(stateInputs.weeklyLoss);
}


