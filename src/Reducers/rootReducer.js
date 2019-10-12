import {combineReducers} from 'redux';
import {courseListReducer} from './courseListReducer';
import {currentUserReducer} from './currentUserReducer';
import {courseDetailReducer} from './courseDetailReducer';
import {courseListTitle} from './courseListTitle';
const rootReducer = combineReducers({
    courseList: courseListReducer,
    currentUser: currentUserReducer,
    courseDetail: courseDetailReducer,
    courseListTitle : courseListTitle
})
export default rootReducer;