import {combineReducers} from 'redux';
import {courseListReducer} from './courseListReducer';

const rootReducer = combineReducers({
    courseList: courseListReducer
})
export default rootReducer;