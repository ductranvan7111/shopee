
function renderMallSlider() {
    const sliderImage = [
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxv1kakvml099c',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxv1leo8ydw9b5',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxv1moyf853t19',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxv1w0cueord65',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxv1moyf853t19',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxv1rpsklbrtcc',
        },
    ];

    let list = document.querySelector('.mall-section-product__slider-list');
    let slider = '';

    for (var item of sliderImage) {
        slider += `
        <li class="mall-section-product__slider-item">
            <img src="${item.image}" alt="slider" class="mall-section-product__slider-img">
        </li>
        `;
    }
    list.innerHTML = slider;
}

renderMallSlider();

function renderDot2() {
    let mallSliders = document.querySelector('.mall-section-product__slider-list').children;
    const dotList = document.querySelector('.mall-dot-list');
    let dot = '';
    for (let i = 0; i < mallSliders.length; i++) {
        dot += `
        <div class="dot-item dot-item-${i} ${i == 0 ? 'dot-item--active' : ''}"></div>
        `;
    }
    dotList.innerHTML = dot;
}

renderDot2();

function renderMallCarousel() {
    const listCarousel = [
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi',
            caption: 'Thời trang -50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qy3177a_xhdpi',
            caption: 'Giảm sốc 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1_xhdpi',
            caption: 'Mua 1 được 2',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2_xhdpi',
            caption: 'Ưu đãi đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d_xhdpi',
            caption: 'Deli siêu sale',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b_xhdpi',
            caption: 'Mua 1 tặng 1',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec_xhdpi',
            caption: 'Quà mọi đơn',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409_xhdpi',
            caption: 'Mua là có quà',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi',
            caption: 'Giảm đến 50%',
        },

    ]
    let list = document.querySelector('.mall-section-product__carousel-items');
    let main = '';

    for (var item of listCarousel) {
        main += `
        <div class="col l-3 m-6 c-6">
            <div class="mall-section-product__carousel-item">
                <a href="#" class="mall-section-product__carousel-link">
                    <img src="${item.image}" alt="img" class="mall-section-product__carousel-img">
                </a>
                <div class="mall-section-product__carousel-caption">${item.caption}</div>
            </div>
        </div>
        `;
    }
    main += `
        <div class="col l-3 m-6 c-6">
            <div class="mall-section-product__carousel-item">
                <a href="#" class="mall-section-product__carousel-link">
                    <div class="mall-section-product__carousel-seemore">
                        Xem tất cả
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </a>
            </div>
        </div>
    `
    list.innerHTML = main;
}
renderMallCarousel();
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.mall-section-product__btn--prev');
    const nextBtn = document.querySelector('.mall-section-product__btn--next');
    const productItems = document.querySelector('.mall-section-product__carousel-items');
    const items = document.querySelectorAll('.mall-section-product__carousel-item');
    let currentIndex = 0;

    const updateItemsPerPage = function() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1024 && windowWidth <= 1239) {
            return 8; 
        } 
        else if (windowWidth <= 1023 && windowWidth >= 740) {
            return 4;
        }
        else if (windowWidth <= 739) {
            return 4;
        } 
        else {
            return 8; 
        }
    };

    let itemsPerPage = updateItemsPerPage();
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
   

    const updateView = function() {
        const offset = currentIndex * 100;
        productItems.style.transform = `translateX(-${offset}%)`;

        prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
        nextBtn.style.display = currentIndex === totalPages - 1 ? 'none' : 'flex';
    }

    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateView();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    });

    window.addEventListener('resize', updateView);

    updateView();
});
    // handle
    // const mallListSlider = document.querySelector('.mall-section-product__slider-list');
    // const mallSliders = document.querySelectorAll('.mall-section-product__slider-img');
    // const mallPrevBtn = document.querySelector('.mall-prev-btn');
    // const mallNextBtn = document.querySelector('.mall-next-btn');
    // const dotItems2 = document.querySelectorAll('.mall-dot-item');

    // let offset = 0;
    // let widthSlider = mallSliders[0].offsetWidth;

    // function updateActiveDot2() {
    //     document.querySelector('.mall-dot-item--active').classList.remove('mall-dot-item--active');
    //     document.querySelector('.mall-dot-item-' + offset).classList.add('mall-dot-item--active');
    // }

    // function handleChangeSlide2() {
    //     if (offset == mallSliders.length - 1) {
    //         offset = 0;
    //         mallListSlider.style.transform = 'translateX(0px)';
    //     } else {
    //         offset++;
    //         mallListSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
    //     }
    //     updateActiveDot2();
    // }

    // let handleEventChangeSlide2 = setInterval(handleChangeSlide2, 5000);

    // mallNextBtn.addEventListener('click', function() {
    //     clearInterval(handleEventChangeSlide2);
    //     handleChangeSlide2();
    //     handleEventChangeSlide2 = setInterval(handleChangeSlide2, 5000);
    // });

    // mallPrevBtn.addEventListener('click', function() {
    //     clearInterval(handleEventChangeSlide2);
    //     if (offset == 0) {
    //         offset = mallSliders.length - 1;
    //         mallListSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
    //     } else {
    //         offset--;
    //         mallListSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
    //     }
    //     updateActiveDot2();
    //     handleEventChangeSlide2 = setInterval(handleChangeSlide2, 5000);
    // });

    // dotItems2.forEach(function(dot, index) {
    //     dot.addEventListener('click', function() {
    //         clearInterval(handleEventChangeSlide2);
    //         offset = index;
    //         mallListSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
    //         updateActiveDot2();
    //         handleEventChangeSlide2 = setInterval(handleChangeSlide2, 5000);
    //     });
    // });

    // window.addEventListener('resize', function() {
    //     widthSlider = mallSliders[0].offsetWidth;
    //     mallListSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
    // });

