import {healthSort} from '../check.js'


test('healthSort', ()=>{
    const units = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        ]

    const sortedUnits = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
        ]
    expect(sortedUnits).toEqual(healthSort(units));  
})