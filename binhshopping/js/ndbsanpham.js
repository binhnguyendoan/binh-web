//search
const searchform = document.querySelector('#search-form');
const search = document.querySelector('.search-link');
const close = document.querySelector('.ri-close-line');
searchform.addEventListener('click', function(){
    search.classList.toggle('active');
    searchform.style.visibility = 'hidden';
})
close.addEventListener('click', function(){
    search.classList.remove('active');
    searchform.style.visibility = 'visible';
})
//hienr thị menu-display and map

const menudisplay = document.querySelector('.menu-display');
const navbar = document.querySelector('#menu-link-item');
const closeitem = document.querySelector('#close-item');
navbar.addEventListener('click', () =>{
    menudisplay.classList.toggle('active');

})
closeitem.addEventListener('click', () =>{
    menudisplay.classList.remove('active');

})
const mapitem = document.querySelector('#map');
const mapdisplay = document.querySelector('.map-display');
const closemap = document.querySelector('#close-map');

mapitem.addEventListener('click', function(){
    mapdisplay.classList.toggle('active');
})

closemap.addEventListener('click', function(){
    mapdisplay.classList.remove('active');
})

const  phone = document.querySelector('#phone');
const phonedisplay = document.querySelector('.phone-display');
const closephobne = document.querySelector('#close-phone');
phone.addEventListener('click', ()=>{
    phonedisplay.classList.toggle('active');

})
closephobne.addEventListener('click', ()=>{
    phonedisplay.classList.remove('active');
    
})

const bag = document.querySelector('#bag');
const bagdisplay = document.querySelector('.bag-display');
const closebag = document.querySelector('#close-bag');
bag.addEventListener('click',()=>{
    bagdisplay.classList.toggle('active');

})
closebag.addEventListener('click',()=>{
    bagdisplay.classList.remove('active');
    
})


//

const downvoucher = document.querySelector('.content-gg-vocher-item');
const voucher = document.querySelector('.content-gg-vocher');

downvoucher.addEventListener('click',()=>{
    voucher.classList.toggle('active');
})















// xoay 180 và lấy ra các link

const down = document.querySelectorAll('#down');
const haslink = document.querySelectorAll('.list-item');
const menu = document.querySelectorAll('.menu-list');

haslink.forEach((item, index) => {
    item.addEventListener('click', () => {
      down.forEach((el, idx) => {
        if (idx !== index && el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      menu.forEach((el, idx) => {
        if (idx !== index && el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      
      down[index].classList.toggle('active');
      menu[index].classList.toggle('active');
    });
  });

// footer
const rightdown = document.querySelectorAll('.footer-lh .footer-lh-item a i');
const linkfooter = document.querySelectorAll('.link-footer');
const footermenu = document.querySelectorAll('.footer-menu');


linkfooter.forEach((item, index) => {
    item.addEventListener('click', () => {
      rightdown.forEach((el, idx) => {
        if (idx !== index && el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      footermenu.forEach((el, idx) => {
        if (idx !== index && el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      
      rightdown[index].classList.toggle('active');
      footermenu[index].classList.toggle('active');
    });
  });







//
var swiper = new Swiper(".container-item", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      "@1.30": {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //

  var swiper = new Swiper(".container-wide", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
   
    },
  });



// login đăng nhập

const qmk = document.querySelectorAll('.login-qmk');
const loginform = document.querySelector('.login');
const loginformqmk = document.querySelector('.login-quenmk');
const logindk = document.querySelector('.login-dk');

qmk.forEach((item) =>{
  item.addEventListener('click', ()=>{
    if(item.innerHTML == "Quên mật khẩu"){
      loginformqmk.classList.remove('annap');
      loginform.classList.add('annap');
    }
    if(item.innerHTML == "Đăng nhập"){
      loginformqmk.classList.add('annap');
      loginform.classList.remove('annap');
    }
    if(item.innerHTML == "Đăng ký"){
      logindk.classList.add('annap');
      logindk.classList.remove('annap');
    }
  })
});

// san pham 
const downsapxep = document.querySelector('.sanpham-banner .sanpham-bl .sapxep p i')
const sapxep = document.querySelector('.sapxep');
const sapxepmenu = document.querySelector('.sapxep-menu');

sapxep.addEventListener('click', ()=>{
  sapxepmenu.classList.toggle('active');
  downsapxep.classList.toggle('active');
});

// bo loc

const closeboloc = document.querySelector('#close-bl');

const bolocmenu = document.querySelector('.dt-bl');

const bolocp = document.querySelector('.boloc p');

bolocp.addEventListener('click', ()=>{
   bolocmenu.classList.toggle('active');
});

closeboloc.addEventListener('click', ()=>{
  bolocmenu.classList.remove('active');
});




