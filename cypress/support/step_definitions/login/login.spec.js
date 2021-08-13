import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given ('I visit the website', ()=>{
    cy.visit('https://www.ubluknetremit.com/Home.aspx');
})

When ('I enter the currency', ()=>{
    cy.get('input[name=txtAmtSend]').type('100');
})

Then('I get the exchange amount', ()=>{
    cy.get('#select2-reCountryname-container').click({force:true});
    cy.get('.fee').should('be.visible');
})
//    //"testFiles": "**/*.{feature,js}"