import "../style.css";

// basic elements
import {inputElements, weekElements} from './views/base';


// models
import Input from './models/Input';
import Week from './models/Week';

//views
import * as inputView from './views/inputView';
import * as weekView from './views/weekView';

const state = {};





// ONLOAD LISTENERS
window.addEventListener('load', () => {
    console.log('on load listener')
    //Set Current Date
    inputElements.currentDate.value = inputView.setCurrentDate();
    // get Local Storage
})


// INITIAL INPUTS EVENT LISTENER

inputElements.inputs.addEventListener('change', e=> {
    console.log('change input listener');
    controlInputs();
})

// INPUT CONTROLLER

const controlInputs = () => {
    const initialInputs = inputView.getInitialInput();
    console.log(initialInputs);
    
    state.inputs = new Input(initialInputs.startDate, initialInputs.startWeight, initialInputs.weightGoal, initialInputs.weeklyLoss);
    
    inputView.setWeeksNeeded(state.inputs.weeksNeeded());
    inputView.dailyKcalDeficit(state.inputs.caloriesDeficitNeeded());
    inputView.updateTDEE(state.inputs.TDEE);
    inputView.avgWeight(state.inputs.avgWeight);
    inputView.totalLoss(state.inputs.totalLoss());
    inputView.updateDailyKcal(state.inputs.totalCaloriesNeeded());
}


//WEEKS LISTENERS
inputElements.addWeekBtn.addEventListener('click', e => {
    weekView.addWeek();
    inputElements.startDate.setAttribute('disabled', true);
    inputElements.startWeight.setAttribute('disabled', true);
})

// WEEKS CONTROLLER

const weeksController = () => {
    
    //
    
}