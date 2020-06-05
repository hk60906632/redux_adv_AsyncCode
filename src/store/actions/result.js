import * as actionTypes from './actionsTypes';

//Redux-thunk is a library add a middleware which allows your action creators to not return the action itself 
//but return a function which will eventually dispatch an action , which allow to run asynchronous code



export const saveResult = ( res ) => {
    //should put most logic in the reducer but not in the action creators
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    //get dispatch here due to redux-thunk, middleware runs between the dispatching of an action and the point of time the action reaches the reducer
    //we still dispatch an action but then redux-thunk, the middleware comes in, has access to the "action", block the old "action" and dispatches it 
    //again in the future
    return (dispatch, getState) => {
        setTimeout(() => {
            //should minimise the usage of getState
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};