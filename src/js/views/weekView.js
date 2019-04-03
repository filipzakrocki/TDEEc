import {
    inputElements
} from './base';

export const addWeek = (weekID) => {
    const weekTemplate = `<div data-id='${weekID}' class="row input-headers week-${weekID}">
                <div class='col-1'>
                    <div class='text-label'>Week ${weekID}</div>
                    <div class='text-label weekNumber'>${generateDate(inputElements.startDate.value, weekID)}</div>
                </div>
                <div class='col-1'>
                    <div class='text-label'>kg</div>
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
                <div class='col-1 avg'>
                    <div class='text-label avg-kg'>AVG Kg</div>
                    <div class='text-label avg-kcal'>AVG kcal</div>
                </div>
                <div class='col-1'>Kg ∆</div>
                <div class='col-1 text-label'> TDEE</div>
            </div>`;

    inputElements.weeksTable.insertAdjacentHTML('beforeend', weekTemplate);
}



export const collectCells = (week) => {

    let cells = {
        kg: [],
        kcal: []
    };

    const kg = document.querySelectorAll(`.week-${week} .kg`);
    const kcal = document.querySelectorAll(`.week-${week} .kcal`);

    kg.forEach(e => {
        if (e.value) {
            cells.kg.push(parseInt(e.value));
        }
    })

    kcal.forEach(e => {
        if (e.value) {
            cells.kcal.push(parseInt(e.value));
        }
    })

    return cells;
}

const generateDate = (date, weeksToAdd) => {
    let startDate, days, months, years, daysToAdd, outputDate;

    console.log(date);


    startDate = new Date(date);
    days = startDate.getDate();
    months = startDate.getMonth();
    years = startDate.getYear() + 1900;
    daysToAdd = (weeksToAdd * 7) - 7;

    outputDate = new Date(years, months, days + daysToAdd);

    return outputDate.toDateString().slice(4);

}

export const disableWeek = (week) => {
    console.log(week);
    if (week > 0) {
        console.log(document.querySelectorAll(`.week-${week} input`));
        const allInputs = document.querySelectorAll(`.week-${week} input`);
        allInputs.forEach(e => e.disabled = true);
    }
    
}

export const updateAverages = (week, avgKg, avgKcal) => {
    document.querySelector(`.week-${week} .avg-kg`).innerHTML = avgKg;
    document.querySelector(`.week-${week} .avg-kcal`).innerHTML = avgKcal;
}
