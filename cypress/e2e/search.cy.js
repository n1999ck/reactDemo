/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/imageSearch')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('search bar can be typed in', () => {
      // https://on.cypress.io/type
      cy.get('.searchBox')
        .type('space').should('have.value', 'space')
  
        .type('{del}{selectall}{backspace}')
  
       
        // Delay each keypress by 0.1 sec
        .type('slow space', { delay: 100 })
        .should('have.value', 'slow space')
    })
  
    // I spent hours trying to figure out how to do this in jest
    // meanwhile this took 15 minutes and one google search
    // https://stackoverflow.com/questions/60907679/how-can-i-use-cypress-to-assert-that-an-image-is-the-correct-one
    it('searches submit correctly', () => {
        cy.get('.searchBox')
        .type('comet')
      // https://on.cypress.io/click
      cy.contains('Submit').click()
      .get('.titleHeader').should('have.text', 'Rosetta at Comet')
      .get('.descriptionParagraph').should('include.text', 'Artist impression')
      .get('.imageElement').should('have.attr', 'src', 'http://images-assets.nasa.gov/image/PIA17666/PIA17666~orig.jpg')
    })
  })
  