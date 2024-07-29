function render() {
    const listCategory = [
        {
            image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
            description: 'Thời trang nam',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
            description: 'Điện thoại & Phụ kiện',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
            description: 'Thiết bị điện tử',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
            description: 'Máy ảnh & Máy quay phim',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
            description: 'Đồng hồ',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
            description: 'Giày dép nam',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn',
            description: 'Thiết bị gia dụng',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn',
            description: 'Thể thao & Du lịch',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
            description: 'Ô tô & Xe máy & Xe đạp',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
            description: 'Thời trang nữ',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn',
            description: 'Mẹ & bé',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn',
            description: 'Sắc đẹp',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn',
            description: 'Sức khoẻ',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn',
            description: 'Giày dép nữ',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
            description: 'Túi ví nữ',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
            description: 'Phụ kiện',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
            description: 'Bách hoá online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
            description: 'Nhà sách online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
            description: 'Bách hoá online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
            description: 'Nhà sách online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
            description: 'Ô tô & Xe máy & Xe đạp',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
            description: 'Bách hoá online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
            description: 'Nhà sách online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
            description: 'Bách hoá online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
            description: 'Nhà sách online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
            description: 'Ô tô & Xe máy & Xe đạp',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
            description: 'Bách hoá online',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
            description: 'Thời trang nam',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
            description: 'Điện thoại & Phụ kiện',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
            description: 'Thiết bị điện tử',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
            description: 'Máy ảnh & Máy quay phim',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
            description: 'Đồng hồ',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
            description: 'Giày dép nam',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn',
            description: 'Thiết bị gia dụng',
        },
    ]
    let list = document.querySelector('.product-category__items');
    let category = '';

        for (item of listCategory) {
            category += `
            <div class="col l-1-2 m-2 c-2-4">
                <a href="#" class="product-category__link">
                    <div class="product-category__item">
                        <img src="${item.image}" alt="product" class="product-category__img">
                        <div class="product-category__desc">${item.description}</div>
                    </div>
                </a>
            </div>
            `;
        }
        list.innerHTML = category;

    }
render();

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.product-category__btn--prev');
    const nextBtn = document.querySelector('.product-category__btn--next');
    const productItems = document.querySelector('.product-category__items');
    const items = document.querySelectorAll('.product-category__link');
    let currentIndex = 0;

    const updateItemsPerPage = function() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1024 && windowWidth <= 1239 || windowWidth <= 1023) {
            return 12; 
        } 
        else {
            return 20; 
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

    
