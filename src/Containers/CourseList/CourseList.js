import React, { Component } from "react";
import CourseItem from "../CourseItem/CourseItem";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
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
      <Container>
        <Row>
        
            {renderCourseList}
          
        </Row>
      </Container>
    );
  }
}
const mapStateToDrops = state => {
  return {
    courseList: state.courseList
  };
};
export default connect(mapStateToDrops)(CourseList);
