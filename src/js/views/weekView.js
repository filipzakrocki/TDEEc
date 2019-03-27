import {inputElements} from './base';

export const addWeek = () => {
    const weekTemplate = `<div class="row input-headers">
                <div class='col-1'>
                    <div class='text-label'>Week</div>
                    <div class='text-label weekNumber'>#</div>
                </div>
                <div class='col-1'>
                    <div class='text-label'>Kg</div>
                    <div class='text-label'>kcal</div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div><input type="number"></div>
                    <div><input type="number"></div>
                </div>
                <div class='col-1'>
                    <div class='text-label'>AVG Kg</div>
                    <div class='text-label'>AVG kcal</div>
                </div>
                <div class='col-1'>Kg ∆</div>
                <div class='col-1 text-label'> TDEE</div>
            </div>`;
    
    inputElements.weeksTable.insertAdjacentHTML('beforeend', weekTemplate);
}