import React from "react";
import CourseList from "./Containers/CourseList/CourseList";
import { connect } from "react-redux";
// get courseList from api
import api from "./Api";
import { getCourse } from "./Actions";

class App extends React.Component {
  componentDidMount() {
    api
      .get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maKhoaHoc=GP05")
      .then(res => {
        this.props.getCourseList(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
     <React.Fragment>
       <CourseList />
     </React.Fragment>
    );
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getCourseList: courselist => {
      dispatch(getCourse(courselist));
    }
  };
};
export default connect(
  null,
  mapDispatchToDrops
)(App);
