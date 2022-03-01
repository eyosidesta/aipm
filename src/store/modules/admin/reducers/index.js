import { combineReducers } from 'redux';
import adminLoggedReducer from "./isLogged";
import newsReducer from './news';


const allReducers = combineReducers({
    isLogged: adminLoggedReducer,
    news: newsReducer,
});

export default allReducers;