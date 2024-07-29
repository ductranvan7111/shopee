function render() {
    const listHotProduct = [
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini Máy chiếu mini Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ad1f4020efab66b72096e01cab9a7e3b',
            sold: 'Bán 9k+ / tháng',
            name: 'Máy chiếu mini',
        },
    ]
    let list = document.querySelector('.hot-search-section__items');
    let product = '';

    for (item of listHotProduct) {
        product += `
        <div class="col l-2 m-3 c-4">
            <a href="#" class="hot-search-section__product">
                <img src="${item.image}" alt="" class="hot-search-section__img">
                <div class="hot-search-section__sold">
                    <div class="hot-search-section__sold-text">${item.sold}</div>
                </div>
                <div class="hot-search-section__name">${item.name}</div>
                <div class="hot-search-section__top">
                    <span>Top</span>
                </div>
            </a>
        </div>
        `
    }
    list.innerHTML = product;
}
render();

// document.addEventListener('DOMContentLoaded', function() {
//     const prevBtn = document.querySelector('.hot-search-section__btn--prev');
//     const nextBtn = document.querySelector('.hot-search-section__btn--next');
//     const productItems = document.querySelector('.hot-search-section__items');
//     const items = document.querySelectorAll('.hot-search-section__product');
//     let currentIndex = 0;

//     const updateItemsPerPage = function() {
//         const windowWidth = window.innerWidth;
//         if (windowWidth <= 1023 && windowWidth >= 740) {
//             return 4; 
//         }
//         else if (windowWidth <= 739) {
//             return 3;
//         } 
//         else {
//             return 6; 
//         }
//     };

//     const updateView = function() {
//         let itemsPerPage = updateItemsPerPage();
//         const totalItems = items.length;
//         const totalPages = Math.ceil(totalItems / itemsPerPage);
//         const offset = currentIndex * 100;

//         productItems.style.transform = `translateX(-${offset}%)`;

//         prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
//         nextBtn.style.display = currentIndex === totalPages - 1 ? 'none' : 'flex';
//     }

//     nextBtn.addEventListener('click', function() {
//         let itemsPerPage = updateItemsPerPage();
//         const totalItems = items.length;
//         const totalPages = Math.ceil(totalItems / itemsPerPage);

//         if (currentIndex < totalPages - 1) {
//             currentIndex++;
//             updateView();
//         }
//     });

//     prevBtn.addEventListener('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateView();
//         }
//     });

//     window.addEventListener('resize', updateView);
    
//     updateView();
// });
