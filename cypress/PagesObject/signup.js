









class Signup {
  setName(name) {
    cy.get("input[type='text']").type(name);
  }

  setEmail(Email) {
    cy.get("input[type='email']").eq(1).type(Email);
  }
  /*
    clickSignupButton() {
      cy.get("button[data-qa='signup-button']").click();
    }
    */
  clickSubmit() {
    cy.get("button[type='submit']").eq(1).click();
  }
  clickTitle() {
    cy.get("#id_gender1").click();
  }
  setPassword(password) {
    cy.get("#password").type(password);
  }
  selectAge(day, months, years) {
    cy.get("#days").select(day);
    cy.get("#months").select(months);
    cy.get("#years").select(years);
  }
  clickOffres() {
    cy.get("#newsletter").click();
  }
  setFirstN(first) {
    cy.get("#first_name").type(first);
  }
  setLastN(last) {
    cy.get("#last_name").type(last);
  }
  setAdresse(adresse) {
    cy.get("#address1").type(adresse);
  }
  selectCountry(country) {
    cy.get("#country").select(country);
  }

  setState(state) {
    cy.get("#state").type(state);
  }
  setCity(city) {
    cy.get("#city").type(city);
  }
  setZipCode(code) {
    cy.get("#zipcode").type(code);
  }

  setPhonenumber(number) {
    cy.get("#mobile_number").type(number);
  }
 
  clickCreate() {
    cy.get("button[type='submit']").eq(0).click();
  }
  

  //https://automationexercise.com/signup
}
export default Signup;
