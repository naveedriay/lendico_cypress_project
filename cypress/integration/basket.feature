Feature: Testing Basket Functionality

    Verify how basket behave to different user actions

    Scenario: Verify adding items to basket
      Given I visit the product page
       And  I add item to basket
       When I visit the basket page
       Then item is present in basket