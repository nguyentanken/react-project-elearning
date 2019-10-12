import React, { Component } from "react";
import CourseItem from "../CourseItem/CourseItem";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.courseList !== prevState.courseList) {
      return {
        courseList: nextProps.courseList
      };
    }
    return null;
  }
  render() {
    const renderCourseList = this.state.courseList.map((course, index) => {
      return <CourseItem course={course} key={index} />;
    });
    return (
      <div className="course-list">
        <Typography className="course-list__title" variant="h4" component="h2">
          Danh Sách Khoá Học
        </Typography>
        <Grid container  className="grid-container">
          <Grid item xs={12} className="item1">
            <img src={require("../../images/banner_01-5.jpg")} alt="khoahoc1"/>
          </Grid>
          <Grid item xs={12} className="item2">
            <img src={require("../../images/banner_02-5.jpg")} alt="khoahoc2"/>
          </Grid>
          <Grid item xs={12} className="item3">
            <img src={require("../../images/banner_03-5.jpg")} alt="khoahoc3"/>
          </Grid>
        </Grid>
        <Grid container className="course-list__container">
          {renderCourseList}
        </Grid>
      </div>
    );
  }
}
const mapStateToDrops = state => {
  return {
    courseList: state.courseList
  };
};
export default connect(mapStateToDrops)(CourseList);
