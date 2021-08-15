Feature: Test User Registration to Lendio Test page

    Testing the user registration feature in QA Test Page

    Scenario: Verify Registration Data successfully submitted & received
       Given I visit the test website
       When I enter the registration data
       Then I verify that input data is successfully received

    # VALIDATION SCENARIO
    Scenario: Verify form validation wont let me submit empty form data
        Given I visit the test website
        When I try to submit the empty form
        Then I should get form validation error

    # VALIDATION SCENARIO
    Scenario Outline: Verify validation rules on company establish date field
        Given I visit the test website
        When I try to submit '<input-type>' data
        Then I get the validation msg '<message>' next to the field
        Examples:
            | input-type | message                       |
            | xx.yyyy    | Diese Angabe ist erforderlich.|
            | 99.9999    | Diese Angabe ist erforderlich.|
            | 13.1111    | Das Datum ist nicht gültig.   |
            | 11.2021    | Das Datum ist nicht gültig.   |
            | 01.1900    |                               |

    # Scenario Outline: Verify validation rules on email field
    #     Given I visit the test website
    #     When I try to submit '<input-type>' data
    #     Then I get the validation msg '<message>' next to the field
    #     Examples:
    #         | input-type    | message                                         |
    #         | 1$4@test.com  | Bitte geben Sie eine gültige E-Mail-Adresse ein.|
    #         | test@%$&^.de  | Bitte geben Sie eine gültige E-Mail-Adresse ein.|
    #         | t99*d@k.net   | Bitte geben Sie eine gültige E-Mail-Adresse ein.|
    #         | 1212314@t.d   |                                                 |
    #         | t@k.de        |                                                 | 

    # Scenario Outline: Verify validation rules on FirstName & LastName field
    #     Given I visit the test website
    #     When I try to submit '<input-type>' data
    #     Then I get the validation msg '<message>' next to the field
    #     Examples:
    #         | input-type    | message                       |
    #         | <%^&*$£"!)(#) | No validation error displayed |
    #         | ^&*(%$)QWERTY | No Validation error displayed |
    #         | 1234567890    | Please Use Latin Alphabet     |
    #         | 67656ALKJLK   | Please Use Latin Alphabet     |


    # Scenario Outline: Test validation rules on Postcode field
    #     Given I visit the test website
    #     When I try to submit '*&^*{}^*(!^%&^$^%£$' data
    #     Then I get the validation msg 'Bitte geben Sie eine gültige Postleitzahl ein' next to the field

    #  Scenario Outline: Verify validation rules on Date of Birth field
    #     Given I visit the test website
    #     When I try to submit '<input-type>' data
    #     Then I get the validation msg '<message>' next to the field
    #     Examples:
    #         | input-type | message                       |
    #         | 33.12.2222 | This information is not valid.|
    #         | 10.15.2122 | This information is not valid.|
    #         | 32.00.1900 | This information is not valid.|
    #         | 29.02.2004 | invalid birth date            |
    #         | 01.01.1900 |                               |

    # Scenario Outline: Test validation rules on PhoneNumber field
    #     Given I visit the test website
    #     When I try to submit '01234567890' data
    #     Then I get the validation msg 'Please enter a valid mobile phone number.' next to the field
