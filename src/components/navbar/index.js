import React from "react";
import { signOut } from "../../Actions/user";
import {getCourseOfTitle} from '../../Actions/course';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../images/logo.png";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
const faker = require("faker");

function Navbar(props) {
  const options = _.map(props.courseListTitle, "tenDanhMuc");

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const handleCourseList =() => {
    props.courseListTitle("GP05");
  }
  const onClick = () => {
    props.signOut(!props.currentUser.isLogin, () => {
      props.history.push("/");
    });
  };
  return (
    <div className="myNavbar">
      <AppBar position="static" className="myNavbar___header">
        <Toolbar className="myNavbar__toolbar">
          <div className="myNavbar__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="myNavbar__menu">
            <Link to="/">
              <Typography>TRANG CHỦ</Typography>
            </Link>
            <Typography 
            color="inherit"
              onClick={handleClick}
              aria-controls="customized-menu"
              aria-haspopup="true"  
            >
              
              DANH MỤC KHÓA HỌC
              
            </Typography>
            <Menu
            className="menu"
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              {options.map((option) => (
                <Link to ="/">
                <MenuItem
                  className="menu__item"
                  key={option}
                  onClick={handleCourseList}
                >
                  {option}
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </div>
          <div className="myNavbar__login__logout">
            {_.isEmpty(props.currentUser) ? (
              <React.Fragment>
                <Link to="/sign-up">
                  <Button color="inherit">ĐĂNG KÍ</Button>
                </Link>
                <Link to="/sign-in">
                  <Button color="inherit">ĐĂNG NHẬP</Button>
                </Link>{" "}
              </React.Fragment>
            ) : (
              <Grid container justify="center" alignItems="center">
                <Avatar
                  alt={props.currentUser.hoTen}
                  src={faker.internet.avatar()}
                  className="myNavbar__avata"
                  aria-haspopup="true"
                  aria-controls="profile-menu"
                  onClick={handleClick}
                />
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to={`/profile-user/${props.currentUser.taiKhoan}`}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Button color="inherit" onClick={onClick}>
                  ĐĂNG XUẤT
                </Button>
              </Grid>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToDrops = state => {
  return {
    currentUser: state.currentUser,
    courseListTitle: state.courseListTitle
  };
};
const mapDispatchToDrops = dispatch => {
  return {
    signOut: boolean => {
      dispatch(signOut(boolean));
    },
    getCourseOfTitle: (titleCourse) => {
      dispatch(getCourseOfTitle(titleCourse))
    }
  };
};
export default connect(
  mapStateToDrops,
  mapDispatchToDrops
)(Navbar);
