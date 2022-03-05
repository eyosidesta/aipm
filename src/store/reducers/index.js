import { combineReducers } from 'redux';
import { universityStudentsMovementReducer, universityStudentsMovementsReducer } from './universityStudentsMovement';
import {newsReducer} from './news';
import adminLoggedReducer from "./isLogged";
import prayerMovementReducer from "./prayerMovement";


const allReducers = combineReducers({
    isLogged: adminLoggedReducer,
    news: newsReducer,
    prayerMovement: prayerMovementReducer,
    universityStudentsMovements: universityStudentsMovementsReducer,
    universityStudentsMovement: universityStudentsMovementReducer
});

export default allReducers;