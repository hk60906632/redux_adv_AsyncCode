import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            //should put most logic in the reducer but not in the action creators
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        
        //shorter way to update state objects by adding the utility funtion in utility.js
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1});
        
        case actionTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val});
    
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    return state;
};

export default reducer;