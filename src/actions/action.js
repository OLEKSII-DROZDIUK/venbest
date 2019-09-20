import axios from 'axios';

export const GET_CUSTOMERS = "GET_CUSTOMERS";

export function getCustomers(){

    return dispatch => {
        axios.get("https://venbest-test.herokuapp.com/").then(response => {
            dispatch({
                type: GET_CUSTOMERS,
                payload: response.data
            });
        })
    }
}
