











class login {

    setEmail(email){
       cy.get("input[type='email']").eq(0).type(email) ;
    }

    setPassword(password){
        cy.get("input[type='password']").type(password) ;
     }
  
    setLogin(loginn){
        cy.get("button[type='submit']").eq(0).click()  ;
    }
}

export default login ;