import "../style.css";

// basic elements
import {inputElements, weekElements} from './views/base';

// models
import Time from './models/Time';

//views
import * as inputView from './views/inputView';

const state = {};
window.s = state;

// INITIAL INPUTS EVENT LISTENER

const controlInputs = () => {
    const initialInputs = inputView.getInitialInput();
    console.log(initialInputs);
    
    state.startDate = new Time(initialInputs.startDate);
    //Set Current Date
    
    
}

inputElements.inputs.addEventListener('change', e=> {
    console.log('dzialam');
    controlInputs();
})

window.addEventListener('load', () => {
    inputElements.currentDate.value = inputView.setCurrentDate();
})
