function render() {
    const listMenu = [
        {
            image: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi',
            description: 'Voucher Giảm Đên 1 Triệu',
        },
        {
            image: 'https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi',
            description: 'Miễn Phí Ship - Có Shopee',
        },
        {
            image: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
            description: 'Khung Giờ Săn Sale',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi',
            description: 'Mã Giảm Giá',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi',
            description: 'Shopee Siêu Rẻ',
        },
        {
            image: 'https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi',
            description: 'Shopee Style Voucher 40%',
        },
        {
            image: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi',
            description: 'Hàng Quốc Tế',
        },
    ]
    let list = document.querySelector('.menu-list');
    let menu = '';

    for (item of listMenu) {
        menu += `
        <li class="menu-item">
            <a href="#" class="menu-link">
                <img src="${item.image}" alt="" class="menu-img">
                <div class="menu-desc">${item.description}</div>
            </a>
        </li>
        `
    }
    list.innerHTML = menu;
}

render();