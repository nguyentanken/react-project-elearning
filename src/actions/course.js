import * as types from '../Contants';


export const getCourse = (courselist) => {
    return {
        type: types.GET_COURSE,
        payload: courselist
    }
}
export const getCourseDetail = (courseDetail) => {
return {
    type: types.GET_COURSE_DETAIL,
    payload: courseDetail
}
}

export const getListTitleCourse = (listTitleCourse) => {
    return {
        type: types.LIST_TITLE_COURSE,
        payload: listTitleCourse
    }
}
export const getCourseOfTitle = (courseOfTitle) => {
    return {
        type: types.GET_COURSE_OF_TITLE,
        payload: courseOfTitle
    }
}