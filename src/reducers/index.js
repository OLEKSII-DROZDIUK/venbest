import { combineReducers } from 'redux';
import {customersReducer} from './customers';

export const rootReducer = combineReducers({
    customers:customersReducer
});
