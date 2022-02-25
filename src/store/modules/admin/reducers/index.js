import adminLoggedReducer from "./isLogged";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged: adminLoggedReducer
});

export default allReducers;