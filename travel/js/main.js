// SHOW MENU

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav__link");

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

}

navLink.forEach(n => n.addEventListener('click', LinkAction))



// Add blur to header

const blurHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

// SHOW CROLL UP

const scrollup = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);


// SCROLL SECTION ACTIVE LINK


const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    var scrollY = window.pageYOffset;

    sections.forEach(current  =>{
         const sectionHeight = current.offsetHeight;
          const  sectionTop = current.offsetTop - 58;
          const sectionId =current.getAttribute('id');
          const sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if(scrollY > screenTop && scrollY <= screenTop + sectionHeight){
            sectionClass.classList.add('active-link');

        }else{
            sectionClass.classList.remove('active-link');
        }




    })
}
window.addEventListener('scroll', scrollActive);



// SCROLL REVEAL AMATION

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay:400,
    // reset: true
})
sr.reveal(`.home_data, .explore_data, .explore_user, .footer_container`)
sr.reveal(`.home_cards`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about_data, .join_image`, {origin: 'right'})

sr.reveal(`.about_image, .join_data`, {origin: 'left'})
sr.reveal(`.popular_card`, {interval:200})