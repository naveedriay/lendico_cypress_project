<reference types="cypress" />

export class Homepage {
    homepage_url = "https://www.hollandandbarrett.com/"
    homepage_title = "Holland & Barrett - The UK's Leading Health & Wellbeing Store"

    elements = {
        title: 'title',
        searchBox: '[data-test=search-form]',
        topMenuItems: '.Desktop-module--list--o9Twa',
        topBasketIcon: '.MenuItem-module--basket--31nZG [data-test=menu-item-link]'
    }
}