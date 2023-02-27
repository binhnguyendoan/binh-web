let select = document.querySelector('.select');
let mainmenu = document.querySelector('.main-menu-list');

select.addEventListener('click', () => {
    mainmenu.classList.toggle('active');

})

///

// TÌm kiếm các icon để xoay 180deg;
let listmenuselect = document.querySelectorAll('.select');
let iconfilter = document.querySelectorAll('.icons-down i');
listmenuselect.forEach((item, index) => {
    item.addEventListener('click', () => {
        iconfilter[index].classList.toggle('hiden');
    })
});

// lấy ra tất cả selet

const selectmenu = document.querySelectorAll('.list-menu-size-select');
const menuitem = document.querySelectorAll('.main-menu-list-item');

selectmenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        menuitem[index].classList.toggle('active');
    });

});

///
const data = [
    {
        img1: "img/giay-nike1.jpg",
        img2: "img/giay-nike2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Court Vision Mid Nam - Đen Trắng",
        price: "2.090.000",
        price2: "2.900.000"
    },
    {
        img1: "img/giay-nike-quest-5 1.jpg",
        img2: "img/giay-nike-quest-5-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Quest 5 Nam - Trắng",
        price: "2.190.000",
        price2: "2.600.000"
    },
    {
        img1: "img/giay-nike-air-max-ap-nam-xam-01-1.jpg",
        img2: "img/giay-nike-air-max-ap-nam-xam-02-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Court Vision Mid Nam - Đen Trắng",
        price: "2.090.000",
        price2: "2.900.000"
    },

    {
        img1: "img/giay-nike-air-max-sc-lea-nam-den-01-1.jpg",
        img2: "img/giay-nike-air-max-sc-lea-nam-den-02-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Max SC Lea Nam- Đen",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-air-zoom-structure-24-1.jpg",
        img2: "img/giay-nike-air-zoom-structure-24-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Zoom Structure 24 Nam - Trắng Xanh",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-court-vision-low-nam-nany-01-1.jpg",
        img2: "img/giay-nike-court-vision-low-nam-nany-02-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Court Vision Low Nam - Navy",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-air-zoom-pegasus-39-nam-trang-1.jpg",
        img2: "img/giay-nike-air-zoom-pegasus-39-nam-trang-02.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Zoom Pegasus 39 Nam - Xám Trắng",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-revolution-6-trang-01-.jpg",
        img2: "img/giay-nike-revolution-6-trang-02.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Zoom Pegasus 39 Nam - Xám Trắng",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike1.jpg",
        img2: "img/giay-nike2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Court Vision Mid Nam - Đen Trắng",
        price: "2.090.000",
        price2: "2.900.000"
    },
    {
        img1: "img/giay-nike-quest-5 1.jpg",
        img2: "img/giay-nike-quest-5-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Quest 5 Nam - Trắng",
        price: "2.190.000",
        price2: "2.600.000"
    },
    {
        img1: "img/giay-nike-air-max-ap-nam-xam-01-1.jpg",
        img2: "img/giay-nike-air-max-ap-nam-xam-02-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Court Vision Mid Nam - Đen Trắng",
        price: "2.090.000",
        price2: "2.900.000"
    },

    {
        img1: "img/giay-nike-air-max-sc-lea-nam-den-01-1.jpg",
        img2: "img/giay-nike-air-max-sc-lea-nam-den-02-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Max SC Lea Nam- Đen",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-air-zoom-structure-24-1.jpg",
        img2: "img/giay-nike-air-zoom-structure-24-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Zoom Structure 24 Nam - Trắng Xanh",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-court-vision-low-nam-nany-01-1.jpg",
        img2: "img/giay-nike-court-vision-low-nam-nany-02-2.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Court Vision Low Nam - Navy",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-air-zoom-pegasus-39-nam-trang-1.jpg",
        img2: "img/giay-nike-air-zoom-pegasus-39-nam-trang-02.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Zoom Pegasus 39 Nam - Xám Trắng",
        price: "2.490.000",
        price2: "2.800.000₫"
    },

    {
        img1: "img/giay-nike-revolution-6-trang-01-.jpg",
        img2: "img/giay-nike-revolution-6-trang-02.jpg",
        sale: "34%",
        brand: "nike",
        name: "Giày Nike Air Zoom Pegasus 39 Nam - Xám Trắng",
        price: "2.490.000",
        price2: "2.800.000₫"
    },
]
const container = document.querySelector(".list-menu-item");
const product = data.map((item) => {
    return `
    <div class="item-prod">
                        <div class="item-prod-img">
                            <a href=""><img src="${item.img1}" alt="">
                                <img src="${item.img2}" alt=""></a>
                        </div>

                        <div class="item-img">

                            <p>New</p>
                            <span>${item.sale}</span>

                        </div>
                        <div class="item-prod-content">
                            <div class="content-start">
                                <p>${item.brand}</p>
                            </div>
                            <div class="content-name">
                                <a>${item.name}</a>
                            </div>
                            <div class="content-price">
                                <p>${item.price}đ <span>${item.price2}đ</span></p>
                            </div>
                        </div>
                    </div>
    `
}).join("")
container.innerHTML = ` <div class="list-prod">${product}</div>`