export class BasketPage {
    basketpage_url = "https://www.hollandandbarrett.com/basket"

    elements = {
        deliveryVanMsg: '.delivery__message span',
        basketTitle: '.basket-title',
        productTitle: '.product__title',
        productPrice: '.product__price',
        basketTotal: '[data-test=price-total] .price-label__price'
    }
}