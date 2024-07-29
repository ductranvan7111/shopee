//render
function renderSlider() {
    const sliderImage = [
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lwvnhla0s5azc4_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lxj8to7qn2e33b_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/sg-11134258-7rdx0-lxj94d19mc08eb_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/sg-11134258-7rdxv-lxj9ao6p3ft677_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/sg-11134258-7rdvn-lxkjuxwagdsad3_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/sg-11134258-7rdyc-lxj9apa3hrj3e4_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/sg-11134258-7rdvs-lxjdkt2f234870_xxhdpi',
        },
        {
            image: 'https://cf.shopee.vn/file/sg-11134258-7rdx0-lxjdkqkio80vaa_xxhdpi',
        },
    ]

    let list = document.querySelector('.slider-list');
    let slider = '';

    for (item of sliderImage) {
        slider += `
        <li class="slider-item">
            <img src="${item.image}" alt="slider" class="slider-img">
        </li>
        `
    }
    list.innerHTML = slider;
}

renderSlider();
function renderDot() {
    let sliders = document.querySelector('.slider-list').children;
    const dotList = document.querySelector('.dot-list');
    let dot = '';
    for (let i = 0; i < sliders.length; i++) {
        dot += `
        <div class="dot-item dot-item-${i} ${i == 0 ? 'dot-item--active' : ''}"></div>
        `
    }
    dotList.innerHTML = dot;
}
renderDot();

// handle
// const listSlider = document.querySelector('.slider-list');
// const sliders = document.querySelectorAll('.slider-img');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');



// let current = 0;
// let width = sliders[0].offsetWidth;


// const updateActiveDot = function() {
//     document.querySelector('.dot-item--active').classList.remove('dot-item--active');
//     document.querySelector('.dot-item-' + current).classList.add('dot-item--active');
// }

// const handleChangeSlide = function() {
//     if (current == sliders.length - 1) {
//         current = 0;
//         // let width = sliders[0].offsetWidth;
//         listSlider.style.transform = `translateX(0px)`;

//         updateActiveDot();
//     } else {
//         current++;
        
//         listSlider.style.transform = `translateX(${width * -1 * current}px)`;
        
//         updateActiveDot();
//     }
// }
// let handleEventChangeSlide = setInterval(handleChangeSlide, 5000)

// nextBtn.addEventListener('click', function() {
//     clearInterval(handleEventChangeSlide);
//     handleChangeSlide();
//     handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
// })

// prevBtn.addEventListener('click', function() {
//     clearInterval(handleEventChangeSlide);
//     if (current == 0) {
//         current = sliders.length - 1;
//         let width = sliders[0].offsetWidth;
//         listSlider.style.transform = `translateX(${width * -1 * current}px)`;

//         updateActiveDot();
//     } else {
//         current--;
//         let width = sliders[0].offsetWidth;
//         listSlider.style.transform = `translateX(${width * -1 * current}px)`;
        
//         updateActiveDot();
//     }
//     handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
// })
// const dotItems = document.querySelectorAll('.dot-item');

// // handle when click dot
// dotItems.forEach(function(dot, index) {
//     dot.addEventListener('click', function() {
//         clearInterval(handleEventChangeSlide);
//         current = index;
//         listSlider.style.transform = `translateX(${width * -1 * current}px)`;

//         updateActiveDot();
//         handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
//     });
// });
// updateActiveDot();

// slider.js

