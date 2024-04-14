











describe('check drop down list', () => {
  it('passes', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get("#billing_country").should("be.visible")
    cy.get("#select2-billing_country-container").click()
    cy.get(".select2-search__field").type("France").type("{enter}")
    cy.get("#select2-billing_country-container").should("have.text", "France")
  })

  it('passes', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get("#zcf_address_country").should("be.visible")
        cy.get("#zcf_address_country").select("Gabon").should("have.value","Gabon")
 
 
  })

  it.only('passes', () => {
    cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput").type('delhi')
        cy.get(".suggestion-title").contains('Delhi Belly').click()
        cy.url().should("include","Delhi_Belly")
   
       
      })
})