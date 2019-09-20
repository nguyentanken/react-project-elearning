import api from '../Api';

export const signUp = (dataUser, callback) => {
    api
    .post("/QuanLyNguoiDung/DangKy", dataUser)
    .then(
        (res) => {
           // đăng kí thành công chuyển sang trang login
            callback()
        })
    .catch(err => {
        console.log(err);
        
    })
}
export const signIn = (dataUser, callback) => {
    api
    .post("/QuanLyNguoiDung/DangNhap", dataUser)
    .then(res => {
        console.log(res.data);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        callback();
    })
    .catch(err => {
        console.log(err);
        
    })
}