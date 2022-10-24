describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it("successfully randers header",()=>{
    cy.get('.logo > img').should('exist')
  })
})