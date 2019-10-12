import React from "react";
import CourseList from "./Containers/CourseList/CourseList";
import { connect } from "react-redux";
import Carousel from './Components/Carousel';
// get courseList from api
import api from "./Api";
import { getCourse, getListTitleCourse } from "./Actions/course";
import {setCurrentUser} from './Actions/user';
class App extends React.Component {
  componentDidMount() {
    api
      .get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maKhoaHoc=GP05")
      .then(res => {
        this.props.getCourseList(res.data);
      })
      .catch(err => console.log(err));
      const user = JSON.parse(localStorage.getItem("currentUser"));
      if (user) this.props.setCurrentUser(user);
      api
      .get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then(res => {
        this.props.getListTitleCourse(res.data)
      })
      .catch(err => {
        console.log(err);
        
      })
  }

  render() {
    return (
     <React.Fragment>
        {/* <Navbar /> */}
        <Carousel />
       <CourseList />
     </React.Fragment>
    );
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getCourseList: courselist => {
      dispatch(getCourse(courselist));
    },
    setCurrentUser: user => {
      dispatch(setCurrentUser(user))
    },
    getListTitleCourse: (listtitlecourse) => {
      dispatch(getListTitleCourse(listtitlecourse))
    }
  };
};
export default connect(
  null,
  mapDispatchToDrops
)(App);
