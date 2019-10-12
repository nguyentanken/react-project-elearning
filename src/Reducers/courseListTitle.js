import * as types from '../Contants';

const initialState = [];

export const courseListTitle = (state = initialState, action ) => {
    switch (action.type) {
        case types.LIST_TITLE_COURSE:
            return action.payload;
        
        default:
            return state;
    }
}