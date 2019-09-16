import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <h2>VỀ CYBERSOFT</h2>                    
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Chúng tôi là ai ?</h5>
                            <p className="card-text">
                            Chúng tôi có hàng loạt những giá trị để chứng minh với bạn về năng lực vượt trội của chúng tôi để bạn ra quyết định ngay. Lý do tại sao chọn chúng tôi cho sự nghiệp của bạn.
ĐẦU TIÊN, CHÚNG TÔI LÀ AI ?

Chúng tôi  xuất thân là những sinh viên xuất sắc top 10 ngành CNTT năm 2007 trường Đại Học Khoa Học Tự Nhiên HCM - ĐH Quốc Gia HCM. Trước khi bắt đầu xây dựng học viện CyberSoft này, chúng tôi là những nhà phát triển phần mềm và những huấn luyện viên với hơn 10 năm kinh nghiệm.

Chúng tôi bắt đầu làm việc ngay khi ra trường tại các tập đoàn gia công phần mềm lớn như Thụy Sỹ, Pháp, Anh,…Chúng tôi từng tham gia là một kiến trúc sư phần mềm cho công ty Anh văn Hội Việt Mỹ, cũng như đưa ý tưởng giải pháp và triển khai toàn bộ hệ thống giao dịch Sàn chứng khoán HCM, HoSE, tư vấn hệ thống CRM, ERP cho ô tô Trường Hải.

Từng Startup và từng thất bại với một ý tưởng cực kì hay nhưng vẫn đóng cửa công ty. Tất cả những điều đó đã giúp chúng tôi có được nhiều trải nghiệm và nhiều bài học tuyệt vời để lấy nguồn cảm hứng truyền đạt cho các bạn trong các khóa học.

Chúng tôi biết điểm mạnh điểm yếu, điều gì làm nên thành công của một người lập trình, điều gì làm nên thành công của một sản phẩm phần mềm.

Thêm nữa, chúng tôi cũng đã gặp rất nhiều công ty và họ đã nhờ chúng tôi tuyển dụng các lập trình, lập trình Front End, Lập trình web, lập trình Mobile, ... cho họ. Họ rất khó khăn để tìm người lành nghề, không những vậy, họ cần thêm những yếu tố mind-set lúc làm việc, tuy duy giải quyết vấn đề, tư duy sáng tạo, làm việc nhóm, tư tưởng làm việc trong môi trường toàn cầu. 

Tại CyberSoft Academy, chúng tôi cam kết mang lại những giá trị thực tế và tất cả những gì làm nên một lập trình chuyên nghiệp, tư duy toàn cầu như vậy.

Đội ngũ của chúng tôi, vừa là những người lập trình viên, vừa làm quản lý, cũng là giám đốc cũng vừa là giảng viên các trường ĐH, CĐ tại HCM. Chúng tôi cũng được chọn vào các chương trình huấn luyện kỹ năng đào tạo nghề tại đại học ARIZONA - ASU - MỸ do tập đoàn INTEL và chính phủ Mỹ tài trợ.

Tất cả những kỹ năng, phương pháp giảng dạy tại các khóa huấn luyện này đều được chúng tôi áp dụng vào các khóa học đào tạo nghề thực tế tại CyberSoft Academy.
                            </p>
                        </div>
                    </div>
                    <h3>Danh Sách Các Khoá Học </h3>
                    <nav className="nav flex-column nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="abc">LẬP TRÌNH REACT JS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="abcd" tabIndex={-1} aria-disabled="true">LẬP TRÌNH ANGULAR JS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="abcd" tabIndex={-1} aria-disabled="true">LẬP TRÌNH VU JS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="abcd" tabIndex={-1} aria-disabled="true">LẬP TRÌNH  PHP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="abcs" tabIndex={-1} aria-disabled="true">LẬP TRÌNH ASP</a>
                        </li>
                    </nav>
                </div>
                <div className="col-sm-6">
                    <h2>CÁC SỰ KIỆN</h2>
                    <h5>KHAI GIẢNG, Dec 17, 2019</h5>
                    <div className="fakeimg">Hình Ảnh</div>
                    <p>Các nội dung liên quan</p>
                    <p>phương pháp giảng dạy tại các khóa huấn luyện này đều được chúng tôi áp dụng vào các khóa học đào tạo nghề thực tế tại CyberSoft Academy</p>
                    <br />
                    <h2>TỔ CHỨC ÔN </h2>
                    <h5>Lớp FontEnd 22, Sep 30, 2019</h5>
                    <div className="fakeimg">Hình Ảnh</div>
                    <p>Thông tin thêm</p>
                    <p>phương pháp giảng dạy tại các khóa huấn luyện này đều được chúng tôi áp dụng vào các khóa học đào tạo nghề thực tế tại CyberSoft Academy.</p>
                </div>
            </div>

        )
    }
}
