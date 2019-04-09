// CSS
import "../style.css";

// UI selectors
import {
    inputElements
} from './views/base';

// models
import Input from './models/Input';
import Week from './models/Week';

//views
import * as inputView from './views/inputView';
import * as weekView from './views/weekView';

let state = {
};





// ONLOAD LISTENERS
window.addEventListener('load', () => {
    
    
    state.weekNo = 0;
    // create blank object
    //    state.inputs = new Input(inputView.getInitialInput());
    //    
    //    // read local storage
    //    state.inputs.readStorage();

    readStorage();

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
    if ((state.weekNo !== 0) && (e.target.matches('.loss-initial-input'))) {
        weeksController(state.weekNo);
    }
})

// INPUT CONTROLLER

const controlInputs = () => {
    //gather all the info from top panel
    if (state.weekNo === 0) {
        const initialInputs = inputView.getInitialInput();
        state.inputs = new Input(initialInputs);
    }


    // add it to state.inputs


    // update the UI

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
    inputView.setDays(inputElements.startDate.value);
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



})

//CELL LISTENERS
inputElements.weeksTable.addEventListener('change', e => {
    //grabbing dataset from week's row
    let weekNumber = e.target.parentNode.parentNode.parentNode.dataset.id;
    // passing it to update the UI through controller
    weeksController(weekNumber);
})

window.addEventListener('keypress', e => {
    if (e.which === 13 && state.weekNo !== 0) {
        weeksController(state.weekNo);
    }
})

// WEEKS CONTROLLER

const weeksController = (dataID) => {

    // create a new name for the model for the week
    const weekLabel = 'week_' + dataID;
    const prevWeek = 'week_' + (dataID - 1);

    // get cells for kg and kcal
    const weekData = weekView.collectCells(dataID);
    //create a new week in the state -> state.week_[number];
    state[weekLabel] = new Week(weekData, dataID);
    state[weekLabel].getStartDate(state.inputs.startDate, dataID);

    // calculate averages for kg and kcal
    const weekAvgKg = state[weekLabel].getAvgKg();
    const weekAvgKcal = state[weekLabel].getAvgKcal();
    // display average
    weekView.updateAverages(dataID, weekAvgKg, weekAvgKcal);
    // calculate and update avgKg in inputs
    state.inputs.avgWeight = weekAvgKg;
    inputView.avgWeight(weekAvgKg);

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

    //recalculate and display daily kaloric needs
    //recalculate and display weeks
    // ONLY IF OBJECT IS CREATED
    
    const weeksNeeded = (state.inputs.avgWeight - state.inputs.weightGoal) / state.inputs.weeklyLoss;
    state.inputs.weeksNeeded = weeksNeeded;
    
    
    const totalCaloriesNeeded = state.inputs.tdee - state.inputs.dailyKcalDeficit;
    
    state.inputs.totalTDEE = totalCaloriesNeeded;

    inputView.updateDailyKcal(totalCaloriesNeeded);
    inputView.setWeeksNeeded(weeksNeeded);





    //LocalStorage setting
    persistData();

}

// LocalStorage functions

//SAVE

function persistData() {
    console.log('INPUTS SAVED');
    localStorage.setItem('state', JSON.stringify(state));
}

//LOAD

function readStorage() {

    //assign stored data to variable
    const storage = JSON.parse(localStorage.getItem('state'));

    //restore from storage and set it as state
    if (storage) {

        state = storage;

        //update the weeks one by one
        const storArr = Object.keys(state).map(i => state[i]);
        storArr.forEach(e => {
            if (e.weekNo) {
                weekView.restoreWeek(e);
                if (e.weekNo < state.weekNo) {
                    //disabling all the previous week but the last
                    weekView.disableWeek(e.weekNo);
                }
            }
        })

        //update the inputs
        inputView.restoreInput(state.inputs);

        //disabling inputs
        inputElements.startDate.setAttribute('disabled', true);
        inputElements.startWeight.setAttribute('disabled', true);

        console.log('LocalStorageLoaded')

    } else {
        console.log('LocalStorageAbsent')
    }
    
    console.log('DEBUG TABLE')
    console.table(state);
}
