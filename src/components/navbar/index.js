import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (            
            <nav className="navbar navbar-fixed-top navbar-inverse">                
                    <div className="navbar-header">                        
                        <Link className="navbar-brand" to="/"><img src="images/logo.png"  alt="abc" /></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse ">
                        <ul className="nav navbar-nav ">
                            <li className="active"><Link to="/">TRANG CHỦ</Link></li>
                            <li><Link to="/about">GIỚI THIỆU</Link></li>
                            <li><Link to="/course-list">DANH SÁCH KHOÁ HỌC</Link></li>
                            <li><Link to="/contact">LIÊN HỆ</Link></li>
                            <li><Link to="/contact">LIÊN HỆ 2</Link></li>
                        </ul>
                    </div>
            </nav>        
        )
    }
}
