









//import Signup from "../PagesObject/signup";
import login from "../PagesObject/loginauto";
describe("Handle Tables", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");
  });

  it("Name and Email and Click Login", () => {
    const log = new login();
    
    log.setEmail("marroukisalah8@gmail.com") ;
    log.setPassword("Cypress123") ;
    log.setLogin() ; 
    // You can add more commands or assertions here
  });
});