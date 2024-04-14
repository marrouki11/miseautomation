



















import Login from "../PagesObject/loginPages";
 
describe('Handle Tables',(()=>{
 
  beforeEach('Login',()=>{
      cy.visit("https://demo.opencart.com/admin/index.php");
 
      const ln = new Login();
      ln.setUserName("demo");
      ln.setPassword("demo");
      ln.clickSubmit()
 
      ln.ValidateLogin()
     
      //Customers-->Customers
      cy.get("#menu-customer>a").click();
      cy.get("#menu-customer>ul>li:first-child").click();
 
  })
 
 
  it('Check Number Rows & Columns',()=>{
     
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
    cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length",'7');
 
  })
}))