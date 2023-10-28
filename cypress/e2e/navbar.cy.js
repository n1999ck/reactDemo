context('Navbar tests', () => {
    it('Displays navbar on index', () => {
        cy.visit('http://localhost:3000/')
        cy.get('nav').should('exist')
    })
    it('Displays navbar on search page', () => {
        cy.visit('http://localhost:3000/imageSearch')
        cy.get('nav').should('exist')
    })
    it('Navbar links on index function', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.navbar-brand').click()
        cy.location('pathname').should('equal', '/')
        cy.get('.nav-link').click()
        cy.location('pathname').should('equal', '/imageSearch')
    })
    it('Navbar links on search page function', () => {
        cy.visit('http://localhost:3000/imageSearch')
        cy.get('.nav-link').click()
        cy.location('pathname').should('equal', '/imageSearch')
        cy.get('.navbar-brand').click()
        cy.location('pathname').should('equal', '/')
    })
})