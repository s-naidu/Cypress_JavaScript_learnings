
describe('Basic test suite', () => {
    it('Basic test case', () => {
        cy.visit('http://google.com')
        cy.title().should('eq', "Google")
        // Basic command 'and' 
        //It is used to create an assertion and is an alias of .should (). The usage is as follows:

        cy.get('.gb_Ud').should('be.visible').and('have.text', 'Sign in')

    })
})