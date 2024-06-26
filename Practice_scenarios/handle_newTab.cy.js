///<reference types='Cypress'/>

describe('Basic test suite', () => {
    it('opens the link in same tab by removing the target attribute', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a')
        .invoke('removeAttr','target').click();
        });
})

