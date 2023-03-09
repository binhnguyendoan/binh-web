let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-btn-container');

let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
// Memu-navbar
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
})




// end-navbar

formbtn.addEventListener('click', ()=>{
    loginform.classList.add('active');
})
formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');
})

window.scroll = ()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    navbar.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}

searchbtn.addEventListener('click', ()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})
// section video
let videobtn = document.querySelectorAll('.vid-btn');

videobtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src =src;
    });

    
});
