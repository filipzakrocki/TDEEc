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
    const mm = now.getMonth()+1;
    const yyyy = now.getFullYear();
    const today = `${yyyy}-${mm < 10 ? '0' + mm : mm}-${dd < 10 ? '0' + dd : dd}`;
    return today;
}
