import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import {BasketPage} from "../../../pages/basket-page";
import {ProductPage} from "../../../pages/product-page"

const product_page = new ProductPage();
const basket_page  = new BasketPage();

Given('I visit the product page', ()=>{
    cy.visit(product_page.productpage_url);
})

And('I add item to basket', ()=>{
    cy.get(product_page.elements.title).should('be.visible');
    cy.get(product_page.elements.price).should('be.visible');
    cy.get(product_page.elements.addToBasket).click();
})

When('I visit the basket page', ()=> {
    cy.visit(basket_page.basketpage_url);
})

Then('item is present in basket', ()=>{
    // cy.get(basket_page.elements.basketTitle).should('be.visible').and('have.text', 'Your basket');
    cy.get(basket_page.elements.productTitle).should('be.visible').and('have.text','Manuka Pharm Manuka Honey MGO 40 250g');
    cy.get(basket_page.elements.productPrice).should('be.visible');
    cy.get(basket_page.elements.basketTotal).should('be.visible').and('have.text', '£26.99');
})