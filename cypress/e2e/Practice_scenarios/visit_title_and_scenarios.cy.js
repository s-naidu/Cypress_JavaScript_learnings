
describe('Basic test suite', () => {
    it('Basic test case', () => {
        cy.visit('http://google.com')
        cy.title().should('eq', "Google")
        // Basic command 'and' 
        //It is used to create an assertion and is an alias of .should (). The usage is as follows:

        cy.get('span.gb_Bd').should('be.visible').and('have.text', 'Sign in')

    })

    it('Type Username And Password', () => {
        cy.visit('https://www.programsbuzz.com/user/login')
        cy.wait(2000)
        cy.get('form').last().within(() => {
            cy.get('#edit-name').focus().type('Rataalada').blur()
        })
    })


})