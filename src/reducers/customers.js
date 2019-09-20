import {GET_CUSTOMERS} from '../actions/action';

export const initialState = {
    customers:[

    ],
};

export function customersReducer(state = initialState, action ) {

    switch (action.type) {
        case GET_CUSTOMERS:
            return {...state, customers:[...state.customers,...action.payload]}
        default:
            return state
    }
}