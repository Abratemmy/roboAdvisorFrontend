import { CREATE, FETCH_ALL, START_LOADING, END_LOADING } from '../constant/ActionTypes'
import * as api from '../APIURL';


export const getRiskToleranceData = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchRisk();
        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message)
    }
}

export const createRiskToleranceData = (post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createRisk(post);


        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING });
        alert('data created')
        console.log('data is', data)
    } catch (error) {
        alert('Ohpps, unable to create new risk tolerance due to an error.')
        console.log(error)
    }
}