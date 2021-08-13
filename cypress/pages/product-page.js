

export class ProductPage {
    productpage_url = "https://www.hollandandbarrett.com/shop/product/manuka-pharm-manuka-honey-mgo-40-60048771"
    product_title = "Manuka Pharm Manuka Honey MGO 40 250g"

    elements = {
        title: '[data-test=title]',
        price: '.product-info p[class*=product-info__price]',
        addToBasket:'[data-test=add-to-basket]'
    }
}