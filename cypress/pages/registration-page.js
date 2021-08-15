export class RegisterationPage
 {
    page_url = "https://lendicoqachallenge.azurewebsites.net"
    username = "QA-CHALLENGE"
    password = "jooTh9me"

    companyName  = '#companyName'
    legalForm    = "div.company-information-container.section-form.first-section > div.company-info-container.row > div.col-sm-6.first-column > fieldset:nth-child(1) > div > div.len-custom-select > div > div" // drop down  
    legalFormOptions='.len-custom-select__options'
    lastYearSales= '.form-group input[value=after50K]' // radio button
    billingStreet= '[data-qa-id=company-info-street] input' //input[name='search.BillingStreet']
    dateFounded  = "input[name='Date_Founded__c']"
    postcode     = "input[name='search.postcodeDe']"
    loanPurpose  = 'div.company-information-container.section-form.first-section > div.company-info-container.row > div.col-sm-6.second-column > fieldset:nth-child(3) > div > div.len-custom-select > div > div' // drop down
    loanPurposeOptions = '.len-custom-select__options'
    city         = "input[name='search.city']"

    Salutation_Mr = "[data-qa-id=representative-info-salutation] input[value=Herr]"
    Salutation_Mrs= "[data-qa-id=representative-info-salutation] input[value=Frau]"

    firstName   = "input[name='search.FirstName']"
    lastName    = "input[name='search.LastName']"
    myEmail     = "input[name='search.Email']"
    my_DOB      = "[data-qa-id=representative-info-dob] input"
    myPostCode  = "[data-qa-id=representative-info-postcode] input"
    myCity      = "[data-qa-id=representative-info-city] input"
    myStreet    = "input[name='search.UserStreet']"
    myNationality = "input[name='search.nationality']"
    myMobilePhone = "input[name='search.mobilePhone']"

    tncCheckbox = "[data-qa-id=submit-terms-checkbox] .check"
    marketingCheckbox = "[data-qa-id=submit-marketing-checkbox] .check"

    submitButton = '[data-qa-id=submit-form-button]'
    validationMsg= '[data-qa-id=submit-form-button-div] div p'
    dateFounded_errorMsg='[data-qa-id=company-info-founded-date] p'
}