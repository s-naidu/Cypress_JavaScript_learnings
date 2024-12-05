/// <reference types='cypress'/>
describe('interview questions', () => {
    it('Page title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

})