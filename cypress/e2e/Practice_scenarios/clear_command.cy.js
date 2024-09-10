///<reference types='Cypress'/>

describe('Basic test suite', () => {
    it('opens the link in same tab by removing the target attribute', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get("input[name='username']").type('Admin')
        cy.wait(2000)
        cy.get("input[name='username']").clear()
    });
})