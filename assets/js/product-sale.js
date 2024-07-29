function render() {
    const listProductSale = [
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxv1zex33b2z26_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxrt3tsxm4m347_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxrt20bvfefv9e_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxkw80ycnfmh93_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsl2p5f20syhed_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lxijpghy4wd5b7_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lved9577svil2c_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqx71ayicotpec_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lseb9645m0g438_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsl2p5f20syhed_tn',
            price: '₫ 1.000.000',
            sold: 'Đang bán chạy',
            saleOff: '-10%',
        },
    ]
    let list = document.querySelector('.flash-sale__product-items');
    let product = '';

    for (item of listProductSale) {
        product += `
        <div class="col l-2 m-3 c-4">
            <div class="flash-sale__product-content">
                <a href="#" class="flash-sale__product-link">
                    <div class="flash-sale__product-item">
                            <img src="${item.image}" alt="product" class="flash-sale__product-img">
                        
                        <div class="flash-sale__product-details">
                            <div class="flash-sale__product-price">${item.price}</div>
                            <div class="flash-sale__product-sold">${item.sold}</div>
                        </div>
                    </div>
                    <div class="flash-sale__product-mall">
                        <span>Mall</span>
                    </div>
                    <div class="flash-sale__product-sale-off">
                        <span class="flash-sale__product-sale-off-percent">${item.saleOff}</span>
                    </div>
                </a>
            </div>
        </div>       
        `
    }
    list.innerHTML = product;
}
render();

// document.addEventListener('DOMContentLoaded', function() {
//     const prevBtn = document.querySelector('.flash-sale__btn--prev');
//     const nextBtn = document.querySelector('.flash-sale__btn--next');
//     const productItems = document.querySelector('.flash-sale__product-items');
//     const items = document.querySelectorAll('.flash-sale__product-content');
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
