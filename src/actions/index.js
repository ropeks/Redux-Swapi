import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function fetchData() {
    return (dispatch) => {
        dispatch({ type: FETCHING_DATA })
        axios.get(`https://swapi.co/api/people/`)
            .then(res => {
                dispatch({ type: SUCCESS, payload: res.data.results })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
} 