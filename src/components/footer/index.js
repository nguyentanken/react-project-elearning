import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="">
                <div className="card-footer text-center">
                    <p>© 2019 By TANKEN && NGUYENTHIEN. </p>
                </div>
                <h5>KÊNH LIÊN HỆ</h5>
                <div>
                    <i className="fa fa-facebook-official" />
                    <i className="fa fa-instagram" />
                    <i className="fa fa-snapchat" />
                    <i className="fa fa-pinterest-p" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-linkedin" />
                </div>
                <p>Powered by <a href="asp" className="">KEN-THIEN</a></p>
            </footer>

        )
    }
}
