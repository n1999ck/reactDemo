describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.nav-link').contains('Active')
  })

  it('failing', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.nav-link').contains('Active')
    cy.get('.nav-link').contains('Active').click()
    cy.location('pathname').should('eq', '/home')
  })

})