Feature: Test User Registration to Lendio Test page

    Testing the user registration feature in QA Test Page

    Scenario: Verify Registration Data successfully submitted & received
       Given I visit the test website
       When I enter the registration data
       Then I verify that input data is successfully received

    Scenario: Verify form validation wont let me submit empty form data
        Given I visit the test website
        When I try to submit the empty form
        Then I should get form validation error