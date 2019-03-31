import "../style.css";

// basic elements
import {inputElements, weekElements} from './views/base';


// models
import Input from './models/Input';
import Week from './models/Week';

//views
import * as inputView from './views/inputView';
import * as weekView from './views/weekView';

const state = {
    weekNo: 1
};





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
    
    state.inputs = new Input(initialInputs);
    
    inputView.setWeeksNeeded(state.inputs.weeksNeeded());
    inputView.dailyKcalDeficit(state.inputs.caloriesDeficitNeeded());
    inputView.updateTDEE(state.inputs.TDEE);
    inputView.avgWeight(state.inputs.avgWeight);
    inputView.totalLoss(state.inputs.totalLoss());
    inputView.updateDailyKcal(state.inputs.totalCaloriesNeeded());
}


//WEEKS LISTENERS
inputElements.addWeekBtn.addEventListener('click', e => {
    weekView.addWeek(state.weekNo);
    state.weekNo += 1;
    inputElements.startDate.setAttribute('disabled', true);
    inputElements.startWeight.setAttribute('disabled', true);
})

//CELL LISTENERS
inputElements.weeksTable.addEventListener('change', e => {

    weeksController();
})

// WEEKS CONTROLLER

const weeksController = () => {
    
    const weekData = weekView.collectCells();
    console.log(weekData);
    
    // add a week to date
    
    // get cells for kg and kcal
    
    // calculate averages for kg and kcal
    
    // display average
    
    // calculate the weekly difference with week before
    
    // calculate avg weight in inputs
    
    // display difference in weeks row
    
    // calcualte TDEE
    
    // display TDEE
    
    // display actual TDEE in inputs
    
    
    
}