import * as types from '../Contants';
const initialState = [];
export const courseDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COURSE_DETAIL:
            return action.payload;
    
        default:
            return state;
    }
}