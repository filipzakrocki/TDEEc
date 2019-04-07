// CSS
import "../style.css";

// UI selectors
import {
    inputElements,
    weekElements
} from './views/base';

// models
import Input from './models/Input';
import Week from './models/Week';

//views
import * as inputView from './views/inputView';
import * as weekView from './views/weekView';

const state = {
    weekNo: 0
};





// ONLOAD LISTENERS
window.addEventListener('load', () => {
    console.log('on load listener')
    //Set Current Date
    const currentDate = inputView.setCurrentDate();
    inputElements.currentDate.value = currentDate;
    //set input date as current date if this is the first week
    if (state.weekNo === 0) {
        inputElements.startDate.value = currentDate;
    }
    // get Local Storage
})


// INITIAL INPUTS EVENT LISTENER

inputElements.inputs.addEventListener('change', e => {
    //listen for inputs in the top panel and add them to the state.inputs
    controlInputs();
})

// INPUT CONTROLLER

const controlInputs = () => {
    //gather all the info from top panel
    const initialInputs = inputView.getInitialInput();
    
    // add it to state.inputs
    state.inputs = new Input(initialInputs);
    
    // update the UI
    if (state.weekNo === 0) {
        
    }
    inputView.setWeeksNeeded(state.inputs.getWeeksNeeded());
    inputView.dailyKcalDeficit(state.inputs.caloriesDeficitNeeded());
    inputView.updateTDEE(state.inputs.setStartTdee());
    inputView.avgWeight(state.inputs.avgWeight);
    inputView.totalLoss(state.inputs.totalLoss());
    inputView.updateDailyKcal(state.inputs.totalCaloriesNeeded());
}


//WEEKS LISTENERS
inputElements.addWeekBtn.addEventListener('click', e => {
    weekView.disableWeek(state.weekNo);
    try {
        if (state.inputs.startDate && state.inputs.startWeight) {
            state.weekNo += 1;
            weekView.addWeek(state.weekNo);
            inputElements.startDate.setAttribute('disabled', true);
            inputElements.startWeight.setAttribute('disabled', true);
            
            inputView.avgWeight(state.inputs.avgWeight);
            inputView.updateTDEE(Math.floor(state.inputs.tdee));
            inputView.totalLoss(state.inputs.totalLoss);
        }
    } catch (er) {
        alert('Make sure to enter Starting Weight and the Current Date!');
    }

}
)

//CELL LISTENERS
inputElements.weeksTable.addEventListener('change', e => {
    let weekNumber = e.target.parentNode.parentNode.parentNode.dataset.id;
    weeksController(weekNumber);
    console.table(state);
})

// WEEKS CONTROLLER

const weeksController = (dataID) => {

    // create a new name for the model for the week
    const weekLabel = 'week_' + dataID;
    const prevWeek = 'week_' + (dataID-1);
    console.log('week = ' + dataID);
    
    // get cells for kg and kcal
    const weekData = weekView.collectCells(dataID);
    //create a new week in the state -> state.week_[number];
    state[weekLabel] = new Week(weekData, dataID);
    
    // calculate averages for kg and kcal
    const weekAvgKg = state[weekLabel].getAvgKg();
    const weekAvgKcal = state[weekLabel].getAvgKcal();
    // display average
    weekView.updateAverages(dataID, weekAvgKg, weekAvgKcal);
    // calculate and update avgKg in inputs
    state.inputs.avgWeight = weekAvgKg;
    inputView.avgWeight(weekAvgKg.toFixed(2));

    // calculate the weekly difference with week before, if its the first week compare with startWeight
    const previousWeekAverage = (state[prevWeek]) ? state[prevWeek].avgKg : state.inputs.startWeight;
    // calculate the average loss
    const weeklyChange = state[weekLabel].calcChange(previousWeekAverage);
    state.inputs.totalLoss = parseFloat(state.inputs.startWeight) - state.inputs.avgWeight;
    inputElements.totalLoss.value = state.inputs.totalLoss.toFixed(2);
    //display it on UI
    weekView.updateCalcChange(dataID, weeklyChange);
    
    // calcualte TDEE
    // take starting/previous week tdee 
    const tdeePrev = state.weekNo === 1 ? (state.inputs.startWeight * 33) : state[prevWeek].tdee;
    // take this week avgTdee
    const tdeeCur = state[weekLabel].calcTdee();
    //Get average between those two
    const tdee = (tdeePrev + tdeeCur) / 2;
    // display TDEE
    weekView.updateTdee(dataID, tdeeCur);
    
    // update and display actual averaged TDEE in inputs
    state.inputs.tdee = tdee;

    //recalculate and display weeks
    inputView.setWeeksNeeded(state.inputs.getWeeksNeeded());
    
    //recalculate and display daily kaloric needs
    inputView.updateDailyKcal(state.inputs.totalCaloriesNeeded());

    

}
