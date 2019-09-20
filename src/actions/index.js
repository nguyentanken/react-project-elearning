import * as types from '../Contants';


export const getCourse = (courselist) => {
    return {
        type: types.GET_COURSE,
        payload: courselist
    }
}