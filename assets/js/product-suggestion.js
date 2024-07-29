// function render() {
//     const listProduct = [
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rdwj-lxrrkt0u8vv0f6_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: '[Chính Hãng] Đồng Hồ Nữ Daniel Wellington Classic Petite Melrose White Size 28mm&32mm Kèm Dây Da Bondi Chính Hãng',
//             sale: ['Giảm 199k', 'Giảm 10%'],
//             price: '₫ 39.000',
//             saleOff: '-30%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwxoz5gna5lnd2_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Áo Thun AM Nam Nữ Tay Lỡ Form Rộng ALTHOUGH Ullzang',
//             sale: ['Rẻ vô địch'],
//             price: '₫ 31.000',
//             saleOff: '-38%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
//             sale: [],
//             price: '₫ 19.000',
//             saleOff: '-38%',
//             label: '',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
//             sale: ['Rẻ vô địch', 'Giảm 20k'],
//             price: '₫ 61.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rd4p-lvtqltde15gpa0_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: 'Máy ép tỏi mini nhà bếp Máy ép tỏi gia dụng kéo tỏi',
//             sale: [],
//             price: '₫ 42.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
//             sale: ['Giảm 20k'],
//             price: '₫ 13.000',
//             saleOff: '-44%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
//             sale: ['Rẻ vô địch', 'Giảm 20k'],
//             price: '₫ 61.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
//             sale: ['Giảm 20k'],
//             price: '₫ 13.000',
//             saleOff: '-44%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
//             sale: [],
//             price: '₫ 19.000',
//             saleOff: '-38%',
//             label: '',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rdwj-lxrrkt0u8vv0f6_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: '[Chính Hãng] Đồng Hồ Nữ Daniel Wellington Classic Petite Melrose White Size 28mm&32mm Kèm Dây Da Bondi Chính Hãng',
//             sale: ['Giảm 199k', 'Giảm 10%'],
//             price: '₫ 39.000',
//             saleOff: '-30%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwxoz5gna5lnd2_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Áo Thun AM Nam Nữ Tay Lỡ Form Rộng ALTHOUGH Ullzang',
//             sale: ['Rẻ vô địch'],
//             price: '₫ 31.000',
//             saleOff: '-38%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
//             sale: ['Rẻ vô địch', 'Giảm 20k'],
//             price: '₫ 61.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwxoz5gna5lnd2_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Áo Thun AM Nam Nữ Tay Lỡ Form Rộng ALTHOUGH Ullzang',
//             sale: ['Rẻ vô địch'],
//             price: '₫ 31.000',
//             saleOff: '-38%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
//             sale: [],
//             price: '₫ 19.000',
//             saleOff: '-38%',
//             label: '',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
//             sale: ['Rẻ vô địch', 'Giảm 20k'],
//             price: '₫ 61.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rd4p-lvtqltde15gpa0_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: 'Máy ép tỏi mini nhà bếp Máy ép tỏi gia dụng kéo tỏi',
//             sale: [],
//             price: '₫ 42.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
//             name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
//             sale: ['Giảm 20k'],
//             price: '₫ 13.000',
//             saleOff: '-44%',
//             label: 'Yêu thích',
//         },
//         {
//             image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
//             imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
//             name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
//             sale: ['Rẻ vô địch', 'Giảm 20k'],
//             price: '₫ 61.000',
//             saleOff: '-38%',
//             label: 'Mall',
//         },
//     ];
//     let list = document.querySelector('.product-suggestion__items');
//     let product = '';

//     for (var item of listProduct) {
//         let saleHtml = item.sale.length > 0 ? item.sale.map(s => `<span>${s}</span>`).join('') : '';
//         product += `
//         <div class="col l-2 m-3 c-4">
//             <div class="product-suggestion__item">
//                 <a href="#" class="product-suggestion__item-link">
//                     <img src="${item.image}" alt="" class="product-suggestion__item-img">
//                     <img src="${item.imageOverlay}" alt="" class="product-suggestion__item-img-overlay">
//                     <div class="product-suggestion__item-info">
//                         <div class="product-suggestion__item-name">
//                             <span>${item.name}</span>
//                         </div>
//                         <div class="product-suggestion__item-sale ${item.sale.length === 0 ? 'hidden' : ''}">
//                             ${saleHtml}
//                         </div>
//                         <div class="product-suggestion__item-price">
//                             <span>${item.price}</span>
//                         </div>
//                     </div>
//                     <div class="product-suggestion__item-saleOff">
//                         <span>${item.saleOff}</span>
//                     </div>
//                     <div class="product-suggestion__item-label ${item.label === '' ? 'hidden' : ''}">
//                         <span>${item.label}</span>
//                     </div>
//                 </a>
//             </div>
//         </div>
//         `;
//     }
//     list.innerHTML = product;
// }
// render();

function renderProducts(listProduct, startIndex, productsPerPage) {
    let list = document.querySelector('.product-suggestion__items');
    let product = '';

    for (let i = startIndex; i < startIndex + productsPerPage && i < listProduct.length; i++) {
        let item = listProduct[i];
        let saleHtml = item.sale.length > 0 ? item.sale.map(s => `<span>${s}</span>`).join('') : '';
        product += `
        <div class="col l-2 m-3 c-4">
            <div class="product-suggestion__item">
                <a href="#" class="product-suggestion__item-link">
                    <img src="${item.image}" alt="" class="product-suggestion__item-img">
                    <img src="${item.imageOverlay}" alt="" class="product-suggestion__item-img-overlay">
                    <div class="product-suggestion__item-info">
                        <div class="product-suggestion__item-name">
                            <span>${item.name}</span>
                        </div>
                        <div class="product-suggestion__item-sale ${item.sale.length === 0 ? 'hidden' : ''}">
                            ${saleHtml}
                        </div>
                        <div class="product-suggestion__item-price">
                            <span>${item.price}</span>
                        </div>
                    </div>
                    <div class="product-suggestion__item-saleOff">
                        <span>${item.saleOff}</span>
                    </div>
                    <div class="product-suggestion__item-label ${item.label === '' ? 'hidden' : ''}">
                        <span>${item.label}</span>
                    </div>
                </a>
            </div>
        </div>
        `;
    }
    list.insertAdjacentHTML('beforeend', product);
}

function checkLoadMore(listProduct, currentPage, productsPerPage) {
    let loadMoreBtn = document.querySelector('.product-suggestion__loadMore');
    if ((currentPage * productsPerPage) >= listProduct.length) {
        loadMoreBtn.textContent = 'Đã hết sản phẩm';
        loadMoreBtn.disabled = true;
        loadMoreBtn.classList.add('disabled');
    } else {
        loadMoreBtn.textContent = 'Hiện thêm sản phẩm';
        loadMoreBtn.disabled = false;
    }
}

function render() {
    const listProduct = [
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rdwj-lxrrkt0u8vv0f6_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: '[Chính Hãng] Đồng Hồ Nữ Daniel Wellington Classic Petite Melrose White Size 28mm&32mm Kèm Dây Da Bondi Chính Hãng',
            sale: ['Giảm 199k', 'Giảm 10%'],
            price: '₫ 39.000',
            saleOff: '-30%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwxoz5gna5lnd2_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Áo Thun AM Nam Nữ Tay Lỡ Form Rộng ALTHOUGH Ullzang',
            sale: ['Rẻ vô địch'],
            price: '₫ 31.000',
            saleOff: '-38%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
            sale: [],
            price: '₫ 19.000',
            saleOff: '-38%',
            label: '',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rd4p-lvtqltde15gpa0_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Máy ép tỏi mini nhà bếp Máy ép tỏi gia dụng kéo tỏi',
            sale: [],
            price: '₫ 42.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
            sale: [],
            price: '₫ 19.000',
            saleOff: '-38%',
            label: '',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rdwj-lxrrkt0u8vv0f6_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: '[Chính Hãng] Đồng Hồ Nữ Daniel Wellington Classic Petite Melrose White Size 28mm&32mm Kèm Dây Da Bondi Chính Hãng',
            sale: ['Giảm 199k', 'Giảm 10%'],
            price: '₫ 39.000',
            saleOff: '-30%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwxoz5gna5lnd2_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Áo Thun AM Nam Nữ Tay Lỡ Form Rộng ALTHOUGH Ullzang',
            sale: ['Rẻ vô địch'],
            price: '₫ 31.000',
            saleOff: '-38%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwxoz5gna5lnd2_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Áo Thun AM Nam Nữ Tay Lỡ Form Rộng ALTHOUGH Ullzang',
            sale: ['Rẻ vô địch'],
            price: '₫ 31.000',
            saleOff: '-38%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
            sale: [],
            price: '₫ 19.000',
            saleOff: '-38%',
            label: '',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rd4p-lvtqltde15gpa0_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Máy ép tỏi mini nhà bếp Máy ép tỏi gia dụng kéo tỏi',
            sale: [],
            price: '₫ 42.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rd4p-lvtqltde15gpa0_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Máy ép tỏi mini nhà bếp Máy ép tỏi gia dụng kéo tỏi',
            sale: [],
            price: '₫ 42.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvwyydm1w9nfa7_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tommy, BOY PHỐ Dép nam nữ  mẫu mới nhất hot tren,(BẢO HÀNH LỖI 1 ĐỔI 1), đế cao su non, mềm êm chân',
            sale: [],
            price: '₫ 19.000',
            saleOff: '-38%',
            label: '',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rd4p-lvtqltde15gpa0_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Máy ép tỏi mini nhà bếp Máy ép tỏi gia dụng kéo tỏi',
            sale: [],
            price: '₫ 42.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnk-lo5od7ye117h63_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w6tlxyegz5f',
            name: 'Tws Tai Nghe Nhét Tai s8 bluetooth Không Dây 5 Màu Trong Suốt Với Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic senbenbao',
            sale: ['Rẻ vô địch', 'Giảm 20k'],
            price: '₫ 61.000',
            saleOff: '-38%',
            label: 'Mall',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
        {
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsmx1tavnxjt6b_tn.webp',
            imageOverlay: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-ly4w9vyeh6sh4d',
            name: 'Áo Thun Nam Nữ in chữ Icon hoạ tiết cây dừa from Dáng Unisex Áo Phông chữ nhỏ full chất liệu cotton hàng hot 2024',
            sale: ['Giảm 20k'],
            price: '₫ 13.000',
            saleOff: '-44%',
            label: 'Yêu thích',
        },
    ];

    const productsPerPage = 12;
    let currentPage = 1;

    document.querySelector('.product-suggestion__loadMore').addEventListener('click', function() {
        currentPage++;
        renderProducts(listProduct, (currentPage - 1) * productsPerPage, productsPerPage);
        checkLoadMore(listProduct, currentPage, productsPerPage);
    });

    // Hiển thị trang đầu tiên
    renderProducts(listProduct, 0, productsPerPage);
    checkLoadMore(listProduct, currentPage, productsPerPage);
}

render();

