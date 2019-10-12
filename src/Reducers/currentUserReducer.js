import * as types from '../Contants';

const initialState = [];

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
           return {...action.payload, isLogin: true};

        case types.SIGN_OUT:
            localStorage.removeItem("currentUser");
          return null;
        default:
            return state;
    }
}