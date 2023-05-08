Feature: homepage search

  As a User I want to check homepage Search Result Using Different DataSet

  Scenario: User should search product and adding to cart page successfully
    Given User is on Home Page
    When Displays seven popular products by default in home page
    And I enter text Blouse in the search box
    And I click on search button
    And I should verify text "Blouse"
    And I click on blouse image
    Then I adding the product to cart and informs the user There is 1 item in your cart.





