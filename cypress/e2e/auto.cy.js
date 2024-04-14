









import Signup from "../PagesObject/signup";

describe("Handle Tables", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");
  });

  it("Name and Email and Click Signup", () => {
    const sig = new Signup();
    sig.setName("salah");
    sig.setEmail("marroukisalah2@gmail.com");
    // sig.clickSignupButton();
    sig.clickSubmit();
    sig.clickTitle();
    sig.setPassword("Cypress12345");
    sig.selectAge("29", "July", "1996");
    sig.clickOffres();
    sig.setFirstN("salah");
    sig.setLastN("marouki");
    sig.setAdresse("Cité jhon");
    sig.selectCountry("Canada");
    sig.setState("Single");
    sig.setCity("new_city");
    sig.setZipCode("1210");
    sig.setPhonenumber("54185545");
    sig.clickCreate() ;
    // You can add more commands or assertions here
  });
});
