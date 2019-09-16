import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="well well-sm prod-info-main prod-wrap clearfix text-center">
                    <h3><strong>Liên Hệ</strong></h3>
                </div>
                <div className="row prod-info-main prod-wrap clearfix">
                    <div className="col-md-7">                    
                        <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4228507821554!2d106.67820731528386!3d10.77889026209449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2623903ead%3A0xec84f670dfe9e9d2!2zMTM0IEPDoWNoIE3huqFuZyBUaMOhbmcgOCwgUGjGsOG7nW5nIDEwLCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1568261545689!5m2!1svi!2s" width="100%" height={315} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                    <div className="col-md-4">
                        <h4><strong>Vui lòng gửi thông tin cho chúng tôi</strong></h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Họ và Tên" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows={3} placeholder="Nội dung cần gửi" defaultValue={""} />
                            </div>
                            <button className="btn btn-info" type="submit" name="button">
                                <i className="fa fa-paper-plane-o" aria-hidden="true" /> Gửi Đi</button>
                        </form>
                    </div>
                    
                </div>
            </div>

        )
    }
}
