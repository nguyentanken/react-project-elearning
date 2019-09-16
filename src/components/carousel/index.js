import React, { Component } from 'react';

export default class Carousel extends Component {
    render() {
        return (
            <div className="my-1">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/banner_02-5.jpg" alt={1} width="100%" height="500px" />
                            <div className="carousel-caption">
                                <h3>Học Nữa Học Mãi</h3>
                                <p>Đăng Ký Khoá Học Ngay Từ Hôm Nay</p>
                            </div>
                        </div>
                        
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon" />
                    </a>
                </div>
            </div>

        );
    }
}