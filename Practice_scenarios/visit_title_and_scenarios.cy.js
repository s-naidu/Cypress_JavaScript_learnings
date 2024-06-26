///<reference types='Cypress'/>

describe('Basic test suite', () => {
    it('Basic test case', () => {
        cy.visit('http://google.com')
        cy.title().should('eq', "Google")
        // Basic command 'and' 
        //It is used to create an assertion and is an alias of .should (). The usage is as follows:

        cy.get('.gb_Da').should('be.visible').and('have.text','Sign in')
        
    })

    it('Type Username And Password',()=>{
        cy.visit('https://www.programsbuzz.com/user/login')
        cy.wait(2000)
        cy.get('form').within(()=>{
            cy.xpath("//input[@id='edit-name']").focus().type('Rataalada').blur()         
        })
    })
    

})