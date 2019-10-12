import api from '../Api';
import * as types from '../Contants';
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
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        callback(res.data);
    })
    .catch(err => {
        console.log(err);
        
    })
}

export const setCurrentUser = (currentUser) => {
    return {
        type: types.SET_CURRENT_USER,
        payload: currentUser
    }
}
export const signOut = (boolean, callback) => {
    return {
        type: types.SIGN_OUT,
        payload: boolean
    }
}
export const getUserProfile = (taikhoan, callback) => {
const user = JSON.parse(localStorage.getItem("currentUser"));
api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken; 
api
    .post("/QuanLyNguoiDung/ThongTinTaiKhoan", {taikhoan})
    .then(res => {
        callback(res.data);
    })
    .catch(err => console.log(err)
    )
}
export const updateUserProfile = (newUserProfile, callback) => {
const user = JSON.parse(localStorage.getItem("currentUser"));
api.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken; 
api.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', newUserProfile)
.then(res => {
   if(callback) callback(res.data);
})
.catch(err => console.log(err)
)
}