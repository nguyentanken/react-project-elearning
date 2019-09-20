import * as types from '../Contants';

const initialState = [];

export const courseListReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.GET_COURSE:
            return action.payload;
         
        default:
            return state;
    }
}