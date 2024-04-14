









import Signup from "../PagesObject/signup";

describe("Handle Tables", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");
  });

  it("Name and Email and Click Signup", () => {
    cy.fixture("example.json").then((userData) => {
      const sig = new Signup();
      sig.setName(userData.name);
      sig.setEmail(userData.email);
      sig.clickSubmit();
      sig.clickTitle();
      sig.setPassword(userData.password);
      sig.selectAge(
        userData.userData.age.day,
        userData.userData.age.month,
        userData.userData.age.year
      );
      if (userData.userData.offres) {
        sig.clickOffres();
      }
      sig.setFirstN(userData.userData.firstName);
      sig.setLastN(userData.userData.lastName);
      sig.setAdresse(userData.userData.address);
      sig.selectCountry(userData.userData.country);
      sig.setState(userData.userData.state);
      sig.setCity(userData.userData.city);
      sig.setZipCode(userData.userData.zipCode);
      sig.setPhonenumber(userData.userData.phoneNumber);
      sig.clickCreate();

      // You can add more commands or assertions here
    });
  });
});
