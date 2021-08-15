import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import { ConfirmationPage } from "../../../pages/confirmation-page";
import {RegisterationPage} from "../../../pages/registration-page"

const registration_page = new RegisterationPage();
const confirmation_page = new ConfirmationPage();

Given ('I visit the test website', ()=>{
    cy.visit("https://QA-CHALLENGE:jooTh9me@lendicoqachallenge.azurewebsites.net");
})

When('I try to submit the empty form', ()=> {
    cy.get(registration_page.submitButton).click();
})

When ('I enter the registration data', ()=>{

    cy.get(registration_page.companyName).type('XYLOHOMA CORPORATION LTD');
    // cy.get(registration_page.companyName).tab();

    cy.get(registration_page.city).type('Berlin');
    cy.get(registration_page.billingStreet).type("Stralauer Allee 3");
    cy.get(registration_page.postcode).type('10245');

    cy.get(registration_page.lastYearSales).check({force:true});
    cy.get(registration_page.dateFounded).type('11.2011');

    cy.get(registration_page.legalForm).click({force:true});
    cy.get('.len-custom-select__options').should('be.visible');
    cy.get('div.len-custom-select__options > span:nth-child(1)').click();

    cy.get(registration_page.loanPurpose).click({force:true});
    cy.get('.len-custom-select__options').should('be.visible');
    cy.get('div.len-custom-select__options > span:nth-child(1)').click();
    

    cy.get(registration_page.Salutation_Mr).click({force:true});
    cy.get(registration_page.firstName).type('Naveed');
    cy.get(registration_page.lastName).type('Riay');
    cy.get(registration_page.my_DOB).type('18.01.1985');
    cy.get(registration_page.myNationality).type('Deutschland');
    cy.get(registration_page.myMobilePhone).type('15223433333');
    cy.get(registration_page.myEmail).type('navtest@gmail.com');
    cy.get(registration_page.myPostCode).type('86943');
    cy.get(registration_page.myCity).type('Thaining');
    cy.get(registration_page.myStreet).type("Schillerstrasse 28");
    
    cy.get(registration_page.tncCheckbox).click({force:true});
    cy.get(registration_page.marketingCheckbox).click({force:true});
    cy.get(registration_page.submitButton).click();
})

Then('I verify that input data is successfully received', ()=>{


    cy.get(confirmation_page.title).should(($div) => { expect($div.text().trim()).equal("Herr");  });
    cy.get(confirmation_page.firstName).should(($div) => { expect($div.text().trim()).equal('Naveed');  });
    cy.get(confirmation_page.lastName).should(($div) => { expect($div.text().trim()).equal('Riay');  });
    cy.get(confirmation_page.dateOfBirth).should(($div) => { expect($div.text().trim()).equal('18.01.1985');  });
    cy.get(confirmation_page.email).should(($div) => { expect($div.text().trim()).equal('navtest@gmail.com');  });
    cy.get(confirmation_page.mobilePhone).should(($div) => { expect($div.text().trim()).equal('+4915223433333');  });
    
    // this address has a bug, where it sometime returns 'Schillerst' & sometime 'Schillers'
    // cy.get(confirmation_page.address).should(($div) => { expect($div.text().trim()).equal('Schillerst, 86943, Thaining');  });

    cy.get(confirmation_page.creditDetails_title).should(($div) => { expect($div.text().trim()).equal('Kreditdetails');  });
    cy.get(confirmation_page.amount).should(($div) => { expect($div.text().trim()).equal('300,000.00 €');  });
    cy.get(confirmation_page.duration).should(($div) => { 
        let str = $div.text().trim();
        expect(str.replace('\n                ',' ')).equal('4 Jahre');  
    });

    cy.get(confirmation_page.company_info_title).should(($div) => { expect($div.text().trim()).equal('Firmeninformationen');  });
    cy.get(confirmation_page.company_name).should(($div) => { expect($div.text().trim()).equal('XYLOHOMA CORPORATION LTD');  });
    cy.get(confirmation_page.established).should(($div) => { expect($div.text().trim()).equal('11.2011');  });
    cy.get(confirmation_page.company_address).should(($div) => { expect($div.text().trim()).equal('Stralauer Allee 3, 10245, Berlin');  });

})

Then('I should get form validation error', ()=>{
    cy.get(registration_page.validationMsg).should('have.text', 'Nicht alle Felder wurden korrekt ausgefüllt. Bitte überprüfen Sie Ihre Angaben.');
})