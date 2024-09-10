///<reference types='cypress'/>
describe('Searching product and selecting 3 product on amazon', () => {

    it('Finding a product from searchResults', () => {

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone{Enter}')
        cy.wait(2000)
        //cy.get('span.a-size-medium.a-color-base.a-text-normal').click()
        cy.contains('Apple iPhone 15 (128 GB) - Blac').invoke('removeAttr', 'target').click()
        cy.wait(2000)


    })




})