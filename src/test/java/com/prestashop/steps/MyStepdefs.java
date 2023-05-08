package com.prestashop.steps;

import com.prestashop.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.prestashop.pages.HomePage;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;

public class MyStepdefs {

  HomePage homePage;


  @Given("^User is on Home Page$")
  public void user_is_on_Home_Page() {

  }

  @When("^Displays seven popular products by default in home page$")
  public void displays_seven_popular_products_by_default_in_home_page() {
    new HomePage().Verifysevenproducts();

  }

  @And("^I enter text Blouse in the search box$")
  public void iEnterTextBlouseInTheSearchBox() {
    new HomePage().clickonsesrchbox("Blouse");

  }

  @And("^I click on search button$")
  public void iClickOnSearchButton() {
    new HomePage().clickOnsearchnButton();
  }

  @And("^I should verify text \"([^\"]*)\"$")
  public void iShouldVerifyText(String message) {
    Assert.assertEquals(message, new HomePage().verifyblouseText(message));
  }

  @And("^I click on blouse image$")
  public void iClickOnBlouseImage() {
    new HomePage().clickonblouseimg();
  }

  @And("^I adding the product to cart$")
  public void iAddingTheProductToCart() {
    new HomePage().clickOnaddingproducttocart();
  }


  @Then("^I adding the product to cart and informs the user There is (\\d+) item in your cart\\.$")
  public void iAddingTheProductToCartAndInformsTheUserThereIsItemInYourCart(int arg0) {
    new HomePage().clickOnaddingproducttocart();
  }
}