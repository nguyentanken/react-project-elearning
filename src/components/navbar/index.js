import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom';
export default function Navbar() {
 
  return (
    <div className="myNavbar">
      <AppBar position="static" className="myNavbar___header">
        <Toolbar className="myNavbar__toolbar">
          <div className="myNavbar__logo" >
           <Link to="/"> 
           <img src={logo} alt="logo" />
           </Link>
          </div>
          <div className="myNavbar__menu">
         <Link to="/">
         <Typography>
           TRANG CHỦ
          </Typography>
         </Link>
          <Typography>
           DANH SÁCH KHÓA HỌC 
          </Typography>
          </div>
          <div className="myNavbar__login__logout">
          <Link to='/sign-up'>
          <Button color="inherit">Register</Button>
          </Link>
         <Link to ='/sign-in'>
         <Button color="inherit">Login</Button>
         </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
