import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Col} from 'reactstrap';

export default class CourseItem extends Component {
  render() {
      let {hinhAnh, tenKhoaHoc, moTa, soLuongHocVien} = this.props.course;
     // console.log(hinhAnh);
      
    return (
      <Col xs="6" sm="4">
        <Card>
          <CardImg
            top
            width="100%"
            src={hinhAnh}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{tenKhoaHoc}</CardTitle>
            <CardText>
             {moTa}
            </CardText>
            <CardText>
              Học viên đăng kí {soLuongHocVien}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
