// Xử lý khi xoá sản phẩm giỏ hàng
document.addEventListener("DOMContentLoaded", function() {
    const cartNotice = document.querySelector('.header__cart-notice');
    const cartItems = document.querySelector('.header__cart-list-item');
    const cartList = document.querySelector('.header__cart-list');

    // Update the cart notice count
    function updateCartNotice() {
        const itemCount = cartItems.querySelectorAll('.header__cart-item').length;
        cartNotice.textContent = itemCount;
        if (itemCount === 0) {
            cartList.classList.add('header__cart-list--no-cart');
        } else {
            cartList.classList.remove('header__cart-list--no-cart');
        }
    }

    // Event listener for remove buttons
    cartItems.addEventListener('click', function(e) {
        if (e.target.classList.contains('header__cart-item-remove')) {
            const cartItem = e.target.closest('.header__cart-item');
            cartItems.removeChild(cartItem);
            updateCartNotice();
        }
    });

    updateCartNotice();
});
// Slider
document.addEventListener('DOMContentLoaded', function() {

    function createSlider(sliderSelector, sliderItemSelector, prevBtnSelector, nextBtnSelector, dotListSelector) {
        const listSlider = document.querySelector(sliderSelector);
        const sliders = document.querySelectorAll(sliderItemSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);
        const dotList = document.querySelector(dotListSelector);
    
        let offset = 0;
        let widthSlider = sliders[0].offsetWidth;
    
    
        function updateActiveDot() {
            dotList.querySelector('.dot-item--active').classList.remove('dot-item--active');
            dotList.querySelector('.dot-item-' + offset).classList.add('dot-item--active');
        }
    
        function handleChangeSlide() {
            if (offset == sliders.length - 1) {
                offset = 0;
                listSlider.style.transform = 'translateX(0px)';
            } else {
                offset++;
                listSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
            }
            updateActiveDot();
        }
    
        let handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
    
        nextBtn.addEventListener('click', function() {
            clearInterval(handleEventChangeSlide);
            handleChangeSlide();
            handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
        });
    
        prevBtn.addEventListener('click', function() {
            clearInterval(handleEventChangeSlide);
            if (offset == 0) {
                offset = sliders.length - 1;
            } else {
                offset--;
            }
            listSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
            updateActiveDot();
            handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
        });
    
        dotList.addEventListener('click', function(e) {
            // console.log(e.target.classList);
            if (e.target.classList.contains('dot-item')) {
                clearInterval(handleEventChangeSlide);
                offset = parseInt(e.target.classList[1].split('-')[2]);
                listSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
                updateActiveDot();
                handleEventChangeSlide = setInterval(handleChangeSlide, 5000);
            }
        });
    
        window.addEventListener('resize', function() {
            widthSlider = sliders[0].offsetWidth;
            listSlider.style.transform = 'translateX(' + (widthSlider * -1 * offset) + 'px)';
        });
    
        updateActiveDot();
    }
    createSlider('.slider-list', '.slider-img', '.prev-btn', '.next-btn', '.dot-list');
    createSlider('.mall-section-product__slider-list', '.mall-section-product__slider-img', '.mall-prev-btn', '.mall-next-btn', '.mall-dot-list');
});

// 
document.addEventListener('DOMContentLoaded', function() {
    function initSlider(wrapperSelector, listSelector, itemSelector, prevBtnSelector, nextBtnSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        const prevBtn = wrapper.querySelector(prevBtnSelector);
        const nextBtn = wrapper.querySelector(nextBtnSelector);
        const productItems = wrapper.querySelector(listSelector); 
        const items = wrapper.querySelectorAll(itemSelector);
        let currentIndex = 0;

        const updateItemsPerPage = function() {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 1023 && windowWidth >= 740) {
                return 4; 
            }
            else if (windowWidth <= 739) {
                return 3;
            } 
            else {
                return 6; 
            }
        };

        const updateView = function() {
            let itemsPerPage = updateItemsPerPage();
            const totalItems = items.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const offset = currentIndex * 100;

            productItems.style.transform = `translateX(-${offset}%)`;

            prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
            nextBtn.style.display = currentIndex === totalPages - 1 ? 'none' : 'flex';
        }

        nextBtn.addEventListener('click', function() {
            let itemsPerPage = updateItemsPerPage();
            const totalItems = items.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);

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
    }

    initSlider('.flash-sale', '.flash-sale__product-items', '.flash-sale__product-content', '.flash-sale__btn--prev', '.flash-sale__btn--next');
    initSlider('.hot-search-section', '.hot-search-section__items', '.hot-search-section__product', '.hot-search-section__btn--prev', '.hot-search-section__btn--next');
    
});
// Sticky
document.addEventListener('DOMContentLoaded', function() {
    const suggestionHeading = document.querySelector('.product-suggestion__heading');
    const parent= suggestionHeading.parentElement;
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    function checkSticky() {
        const rect = parent.getBoundingClientRect();
        const headingRect = suggestionHeading.getBoundingClientRect();
        // console.log(rect.top, rect.bottom, headerHeight, headingRect.height)
        
        if (rect.top <= headerHeight && rect.bottom >= headingRect.height + headerHeight) { //Kiểm tra xem phần tử cha có đang cuộn đến vị trí mà tiêu đề cần trở thành "sticky" không.
            suggestionHeading.classList.add('sticky');
            suggestionHeading.classList.remove('sticky-hidden');
        } else {
            suggestionHeading.classList.remove('sticky');
        }
        
        if (rect.bottom < headingRect.height + headerHeight) { //Kiểm tra xem phần tử cha có cuộn ra khỏi vùng hiển thị không.
            suggestionHeading.classList.add('sticky-hidden');
        } else {
            suggestionHeading.classList.remove('sticky-hidden');
        }
    }

    window.addEventListener('scroll', checkSticky);
    window.addEventListener('resize', checkSticky);
    
    checkSticky();
});


// document.getElementById('logout').addEventListener('click', function(e) {
//     e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    
//     document.getElementById('login').style.display = 'none';

//     document.getElementById('no-login').style.display = 'inline-flex';
//     document.getElementById('no-login-2').style.display = 'inline-flex';
// });


// window.onload = function() {
//     if (document.getElementById('login').style.display !== 'none') {
//         document.getElementById('no-login').style.display = 'none';
//         document.getElementById('no-login-2').style.display = 'none';
//     }
// };
