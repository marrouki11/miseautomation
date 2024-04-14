









class Login{
   
    setUserName(username){
        cy.get("#input-username").type(username);
    }
    setPassword(password){
        cy.get("#input-password").type(password);
    }
    clickSubmit(){
        cy.get("button[type='submit']").click();
    }
    ValidateLogin(){
        cy.get(".btn-close").click();
        cy.get("h1").should('have.text','Dashboard')
    }
 
}
export default Login;