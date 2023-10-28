

context('APOD display', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
    
    it('Displays image', () => {
        cy.get('img').should('have.attr', 'src')
    })
    it('Displays title', () => {
        cy.get('h1').should('not.be.empty')
    })
    it('Displays description', () => {
        cy.get('.py-3').should('not.be.empty')
    })
})