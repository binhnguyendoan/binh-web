
let login = document.querySelectorAll('#next-login');
const dn = document.querySelector('.login-box');
const dk = document.querySelector('.register');
const qmk = document.querySelector('.Forgot-password');

login.forEach((item) =>{
    item.addEventListener('click', ()=>{
        if(item.innerHTML == "Đăng ký"){
            dn.classList.add('active');
            qmk.classList.add('active');
            dk.classList.remove('active');
        }
        if(item.innerHTML == "Đăng nhập"){
            dk.classList.add('active');
            qmk.classList.add('active');
            dn.classList.remove('active');
        }
        if(item.innerHTML == "Quên mật khẩu?"){
            dk.classList.add('active');
            dn.classList.add('active');
            qmk.classList.remove('active');

        }
    });
});

