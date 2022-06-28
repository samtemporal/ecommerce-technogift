let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './img/productos/earbuds_skullcandy.png',
        image2: './img/productos/earbuds_skullcandy.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Audifonos Philips',
        image1: './img/productos/aud_bandaSujetadora.png',
        image2: './img/productos/aud_bandaSujetadora.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './img/productos/jbl_2.png',
        image2: './img/productos/jbl_2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './img/productos/apple.png',
        image2: './img/productos/apple.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './img/productos/realme_buds.png',
        image2: './img/productos/realme_buds.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './img/productos/sony_bluetooh.png',
        image2: './img/productos/sony_bluetooh.png',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./acer.html" class="btn-flat btn-hover btn-shop-now">Comprar ahora</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <!--<button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>-->
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))