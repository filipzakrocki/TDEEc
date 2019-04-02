export const inputElements = {
    inputs: document.querySelector('#inputs-table'),
    //left column of inputs
    startDate: document.querySelector('.date-initial-input'),
    startWeight: document.querySelector('.weight-initial-input'),
    weightGoal: document.querySelector('.goal-initial-input'),
    weeklyLoss: document.querySelector('.loss-initial-input'),
    //right column of inputs, mostly disabled
    currentDate: document.querySelector('.date-current-input'),
    weeksNeeded: document.querySelector('.weeks-needed'),
    kcalNeeded: document.querySelector('.daily-kcal-needed'),
    currentTDEE: document.querySelector('.current-TDEE'),
    totalKcalDay: document.querySelector('.total-kcal-day'),
    avgWeight: document.querySelector('.avg-weight'),
    totalLoss: document.querySelector('.total-loss'),
    //weeks tables
    weeksTable: document.querySelector('.weeks-table'),
    addWeekBtn: document.querySelector('.add-week-btn'),
    //weeks cells
    kgCells: document.querySelectorAll('.kg'),
    kcalCells: document.querySelectorAll('.kcal')
    
}