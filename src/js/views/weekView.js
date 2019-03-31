import {inputElements} from './base';

export const addWeek = (weekID) => {
    const weekTemplate = `<div class="row input-headers week-${weekID}">
                <div class='col-1'>
                    <div class='text-label'>Week </div>
                    <div class='text-label weekNumber'>${weekID}</div>
                </div>
                <div class='col-1'>
                    <div class='text-label'>Kg</div>
                    <div class='text-label'>kcal</div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input class='kg' type="number"></div>
                    <div><input class='kcal' type="number"></div>
                </div>
                <div class='col-1'>
                    <div class='text-label avg-kg'>AVG Kg</div>
                    <div class='text-label avg-kcal'>AVG kcal</div>
                </div>
                <div class='col-1'>Kg ∆</div>
                <div class='col-1 text-label'> TDEE</div>
            </div>`;
    
    inputElements.weeksTable.insertAdjacentHTML('beforeend', weekTemplate);
}


//incorporate the week?
export const collectCells = (week) => {
    
    let cells = {
        kg: [],
        kcal: []
    };
    
    const kg = document.querySelectorAll(`.week-${week} .kg`);
    
    kg.forEach(e => {
        if (e.value) {
            cells.kg.push(parseInt(e.value));
        }
    })
    
    return cells;
}

//function here to get inputs for kcal and 