$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "homepage search",
  "description": "\r\nAs a User I want to check homepage Search Result Using Different DataSet",
  "id": "homepage-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15127109200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should search product and adding to cart page successfully",
  "description": "",
  "id": "homepage-search;user-should-search-product-and-adding-to-cart-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Displays seven popular products by default in home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter text Blouse in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should verify text \"Blouse\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on blouse image",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I adding the product to cart and informs the user There is 1 item in your cart.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 168644700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.displays_seven_popular_products_by_default_in_home_page()"
});
formatter.result({
  "duration": 220738000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterTextBlouseInTheSearchBox()"
});
formatter.result({
  "duration": 143637000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSearchButton()"
});
formatter.result({
  "duration": 1065488800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldVerifyText(String)"
});
formatter.result({
  "duration": 73065300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnBlouseImage()"
});
formatter.result({
  "duration": 2861421100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "MyStepdefs.iAddingTheProductToCartAndInformsTheUserThereIsItemInYourCart(int)"
});
formatter.result({
  "duration": 89908500,
  "status": "passed"
});
formatter.after({
  "duration": 137400,
  "status": "passed"
});
});