/// <reference types='Cypress'/>

describe('interview questions', () => {
    it('Page title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

})