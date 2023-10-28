context('Footer tests', () => {
    it('Displays footer on index', () => {
        cy.visit('http://localhost:3000/')
        cy.get('footer').should('contain.text', 'Made by Nick Miller for Server Side Web Development')
    })
    it('Displays footer on search page', () => {
        cy.visit('http://localhost:3000/imageSearch')
        cy.get('footer').should('contain.text', 'Made by Nick Miller for Server Side Web Development')
    })
})