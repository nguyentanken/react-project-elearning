import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getCourseDetail } from "../../Actions/course";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import api from "../../Api";
import _ from "lodash";
const faker = require("faker");

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetail: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.courseDetail !== prevState.courseDetail) {
      return {
        courseDetail: nextProps.courseDetail
      };
    }
    return null;
  }

  render() {
    const {
      tenKhoaHoc,
      moTa,
      soLuongHocVien,
      luotXem
    } = this.state.courseDetail;
    const hoTen = _.get(this.state.courseDetail, "nguoiTao.hoTen");
    return (
      <div className="mycontainer">
        <div className="breadcrumb__carousel">
          <Breadcrumbs />
        </div>
        <div className="mycontainer__tenkhoahoc">
          <Typography variant="h1" gutterBottom>
            {tenKhoaHoc}
          </Typography>
          <Typography variant="h3" gutterBottom>
            {moTa}
          </Typography>
        </div>
        <div className="mycontainer__info">
          <div className="info__giangvien">
            <Avatar
              src={faker.internet.avatar()}
              alt="avatar giang vien"
              className="heading__info-avatar"
            />
            <div>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                className="info__giangvien-tieude"
              >
                Giảng Viên
              </Typography>
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className="info__giangvien-hoten"
              >
                {hoTen}
              </Typography>
            </div>
          </div>
          <div className="info__sohocvien">
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="hocvien"
            >
              Học Viên
            </Typography>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              className="sohocvien"
            >
              {soLuongHocVien}
            </Typography>
          </div>
          <div className="info__luotxem">
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="luotxem"
            >
              Lượt Xem
            </Typography>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              className="soluotxem"
            >
              {luotXem}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const maKhoaHoc = _.last(this.props.history.location.pathname.split("/"));
    api
      .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
      .then(res => {
        this.props.getCourseDetail(res.data);
      })
      .catch(err => console.log(err));
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getCourseDetail: course => {
      dispatch(getCourseDetail(course));
    }
  };
};
const mapStateToDrops = state => {
  return {
    courseDetail: state.courseDetail
  };
};
export default connect(
  mapStateToDrops,
  mapDispatchToDrops
)(CourseDetail);
